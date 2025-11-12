import { Box, Typography, Button, Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { authActions } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //  Obtenemos los datos del usuario guardados en Redux
  const userData = useSelector((state: RootState) => state.authenticator)

  console.log('Datos del usuario desde Redux:', userData)

  // Función para cerrar sesión
  const handleLogout = () => {
    dispatch(authActions.logout()) // cambia el estado a logout
    navigate('/') // redirige al login
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Página Home de {userData.userName || 'Invitado'}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Rol: {userData.userRol || 'Sin rol'}
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        (Estos datos se están mostrando directamente desde el store de Redux)
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Salir
        </Button>
      </Stack>
    </Box>
  )
}
