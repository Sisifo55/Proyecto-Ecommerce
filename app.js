const express = require('express');
const sequelize = require('./config/database'); // Предположим, что здесь у вас правильный путь к конфигурации базы данных
const userRoutes = require('./routs/userRoutes');
const productRoutes = require('./routs/productRoutes'); // Исправил путь к файлу маршрутов
const { authenticate } = require('./middleware/authenticateToken');
const authRoutes = require('./routs/authRoutes');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

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
app.use('/products', productRoutes); // Исправил маршрут до productRoutes
app.use('/auth', authRoutes); // Маршрут для аутентификации уже использован выше

// Приветственный маршрут
app.get('/', (req, res) => {
  res.send('Welcome');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
