const express = require('express');
const sequelize = require('./config/database'); // Предположим, что здесь у вас правильный путь к конфигурации базы данных
const userRoutes = require('./routs/userRoutes');
const categoryRoutes = require('./routs/categoryRoutes');
const productRoutes = require('./routs/productRoutes'); // Исправил путь к файлу маршрутов
const { authenticate } = require('./middleware/authenticateToken');
const authRoutes = require('./routs/authRoutes');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // Поддержка разбора JSON тела запроса

// Подключение к базе данных
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Маршруты для пользователей, продуктов и аутентификации
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); // Исправлен маршрут до productRoutes
app.use('/auth', authRoutes); // Маршрут для аутентификации уже использован выше
app.use('/api/categories', categoryRoutes);
// Приветственный маршрут
app.get('/', (req, res) => {
  res.send('Welcome');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});