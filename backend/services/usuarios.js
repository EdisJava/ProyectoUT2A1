const express = require('express');
const router = express.Router();
const db = require('./db');
const helper = require('../helper');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const rows = await db.query('SELECT id, nombre, login, rol FROM usuarios');
    const data = helper.emptyOrRows(rows);
    res.json({ data });
  } catch (error) {
    console.error('Error en GET /usuarios:', error.message);
    res.status(500).json({ error: 'Error en el servidor', details: error.message });
  }
});

// Insertar un nuevo usuario
router.post('/', async (req, res) => {
  const { nombre, login, password, rol } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO usuarios (nombre, login, password, rol) VALUES (?, ?, ?, ?)',
      [nombre, login, password, rol]
    );
    res.status(201).json({ message: 'Usuario creado', id: result.insertId });
  } catch (error) {
    console.error('Error en POST /usuarios:', error.message);
    res.status(500).json({ error: 'Error en el servidor', details: error.message });
  }
});

// Actualizar un usuario existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, login, password, rol } = req.body;
  try {
    const result = await db.query(
      'UPDATE usuarios SET nombre = ?, login = ?, password = ?, rol = ? WHERE id = ?',
      [nombre, login, password, rol, id]
    );
    res.json({ message: 'Usuario actualizado', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error en PUT /usuarios/:id:', error.message);
    res.status(500).json({ error: 'Error en el servidor', details: error.message });
  }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
    res.json({ message: 'Usuario eliminado', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error en DELETE /usuarios/:id:', error.message);
    res.status(500).json({ error: 'Error en el servidor', details: error.message });
  }
});

module.exports = router;