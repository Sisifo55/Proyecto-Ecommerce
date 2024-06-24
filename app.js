
const express = require('express');
const app = express();
const sequelize = require('./controlers/database'); // Asegúrate de que este es el archivo correcto

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Prueba la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define una ruta simple para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});