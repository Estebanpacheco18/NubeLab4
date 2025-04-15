const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 9000;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydatabase'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

// Importar y usar las rutas
const clientesRoutes = require('./routes/clientes')(db);
const productosRoutes = require('./routes/productos')(db);

app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});