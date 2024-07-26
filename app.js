const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routs/userRoutes');
const categoryRoutes = require('./routs/categoryRoutes');
const productRoutes = require('./routs/productRoutes'); 
const { authenticate } = require('./middleware/authenticateToken');
const authRoutes = require('./routs/authRoutes');
const orderRoutes = require('./routs/orderRouters');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // JSON body parser middleware
app.use(bobyParser.json());
// Connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database the goShop:', err);
  });

// Routes for users, products, and authentication
app.use('/go/users', userRoutes);
app.use('/go/products', productRoutes);
app.use('/go/auth', authRoutes);
app.use('/go/categories', categoryRoutes);
app.use('/go/orders', orderRoutes);
// Welcome route
app.get('/go', (req, res) => {
  res.send('Welcome to the goShop');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});