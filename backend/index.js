const express = require('express');
const cors = require('cors');
const { handleNotFound } = require('./helper');
const loginRoutes = require('./services/login');
const usuariosRoutes = require('./services/usuarios');
const items = require('./services/items');

const app = express();
const PORT = 3030;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware para registrar solicitudes entrantes
app.use((req, res, next) => {
  console.log(`Solicitud entrante: ${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

app.use('/login', loginRoutes);
app.use('/usuarios', usuariosRoutes);

// Endpoints para la gestión de items (colección)
app.get('/addItem', async function (req, res, next) {
  try {
    res.json(await items.insertData(req));
  } catch (err) {
    console.error(`Error while inserting items `, err.message);
    next(err);
  }
});

app.get('/getItems', async function (req, res, next) {
  try {
    res.json(await items.getData(req));
  } catch (err) {
    console.error(`Error while getting items `, err.message);
    next(err);
  }
});

app.get('/deleteItem', async function (req, res, next) {
  try {
    res.json(await items.deleteData(req));
  } catch (err) {
    console.error(`Error while deleting items `, err.message);
    next(err);
  }
});

// Endpoint para estadísticas
app.get('/estadisticas', (req, res) => {
  const estadisticas = {
    usuariosActivos: 120,
    ingresosMensuales: 4500,
    nuevosUsuarios: 35,
  };
  res.json(estadisticas);
});

// Manejo de rutas no encontradas
app.use(handleNotFound);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});