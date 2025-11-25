const express = require('express');
const router = express.Router();
const db = require('./db');
const helper = require('../helper');

// Middleware para registrar solicitudes entrantes en este servicio
router.use((req, res, next) => {
  console.log(`Solicitud al endpoint /login: ${req.method} ${req.url}`);
  console.log('Cuerpo de la solicitud:', req.body);
  next();
});

// Endpoint para autenticar al usuario
router.post('/', async (req, res) => {
  const { user, password } = req.body;

  try {
    const rows = await db.query(
      `SELECT id, nombre, rol FROM usuarios WHERE login = ? AND password = ?`,
      [user, password]
    );

    const data = helper.emptyOrRows(rows);

    if (data.length > 0) {
      res.json({ data });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error en el endpoint /login:', error.message);
    res.status(500).json({ error: 'Error en el servidor', details: error.message });
  }
});

module.exports = router;
