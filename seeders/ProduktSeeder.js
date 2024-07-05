const sequelize = require('../config/database');
const Product = require('../models/product');

const seedProducts = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate([
    { name: 'Product 1', description: 'Description 1', price: 10.0 },
    { name: 'Product 2', description: 'Description 2', price: 20.0 },
    { name: 'Product 3', description: 'Description 3', price: 30.0 },
    { name: 'Product 4', description: 'Description 4', price: 40.0 },
    { name: 'Product 5', description: 'Description 5', price: 50.0 },
  ]);

  console.log('Seed completed!');
  process.exit(0);
};

seedProducts();
