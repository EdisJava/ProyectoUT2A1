import type { FC } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

//  Importaciones de Redux y navegación
import { useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //  Función que simula login correcto
  const handleLogin = () => {
    const userData = {
      name: 'Edgar Javier Quesada Morales',
      rol: 'administrador'
    }

    //  Guardamos los datos en Redux
    dispatch(authActions.login(userData))

    // Navegamos a la página del panel
    navigate('/home')
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
        Edgar Javier Quesada Morales
      </Typography>

      <Typography variant="body1" gutterBottom>
        Pulsa el botón de abajo para iniciar sesión y guardar tus datos en Redux antes de navegar al panel.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: 'wrap' }}>
        {/* Botón principal de login */}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogin}
        >
          Acceder
        </Button>
      </Stack>
    </Container>
  )
}

export { Login }
