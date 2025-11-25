import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface ItemType {
  id?: number;
  nombre: string;
  marca: string;
  tipo: string;
  precio: number;
}

const itemInitialState: ItemType = {
  nombre: '',
  marca: '',
  tipo: '',
  precio: 0,
};

const Dashboard = () => {
  const [item, setItem] = useState<ItemType>(itemInitialState);
  const [tableData, setTableData] = useState<ItemType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: name === 'precio' ? parseFloat(value) : value });
  };

  const getItems = async () => {
    try {
      const response = await fetch('http://localhost:3030/getItems');
      const result = await response.json();
      if (result.data) {
        setTableData(result.data);
      }
    } catch (error) {
      console.error('Error getting items:', error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleInsert = async () => {
    try {
      const response = await fetch(
        `http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`
      );
      const result = await response.json();
      if (result > 0) {
        alert('Datos guardados con éxito');
        getItems(); // Refresh table
        setItem(itemInitialState);
      } else {
        alert('Error al guardar los datos');
      }
    } catch (error) {
      console.error('Error inserting item:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`);
      const result = await response.json();
      if (result > 0) {
        getItems(); // Refresh table
      } else {
        alert('Error al eliminar el dato');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Box component="form" sx={{ mb: 3 }}>
        <TextField
          label="Nombre"
          name="nombre"
          value={item.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Marca"
          name="marca"
          value={item.marca}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tipo"
          name="tipo"
          value={item.tipo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          name="precio"
          type="number"
          value={item.precio}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleInsert} sx={{ mt: 2 }}>
          Insertar Datos
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.marca}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell>{row.precio}</TableCell>
                <TableCell>
                  <IconButton aria-label="delete" onClick={() => row.id && handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;