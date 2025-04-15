const express = require('express');
const app = express();
const port = 9000;

// Importar rutas
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

// Middleware para rutas
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola desde Express en Docker!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});