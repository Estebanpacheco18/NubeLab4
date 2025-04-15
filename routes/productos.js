const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
      if (err) {
        res.status(500).send('Error al obtener productos');
        return;
      }
      res.json(results);
    });
  });

  return router;
};