module.exports = {
  handleNotFound: (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  },
  emptyOrRows: (rows) => {
    return rows.length === 0 ? [] : rows;
  },
};