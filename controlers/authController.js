const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Путь к модели User

// Регистрация пользователя
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Генерируем соль и хэшируем пароль
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создаем нового пользователя
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role // не забываем про роль, если она необходима
    });

    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

// Авторизация пользователя
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Находим пользователя по имени
    const user = await User.findOne({ where: { username } });

    // Проверяем существование пользователя и соответствие пароля
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Генерируем JWT токен
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

