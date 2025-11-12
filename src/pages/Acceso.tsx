import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'

export default function Acceso(){
	const navegar = useNavigate()
	const [error, setError] = useState<string | null>(null)

	const manejarEnvio = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		const datos = new FormData(evento.currentTarget)
		const usuario = String(datos.get('usuario') || '')
		const clave = String(datos.get('clave') || '')

		// Validación de ejemplo: usuario/clave 'admin' -> acceso correcto
		if (usuario === 'admin' && clave === 'admin') {
			setError(null)
			navegar('/login') // Redirigir a la página de login
		} else {
			setError('Credenciales inválidas. Usa usuario: admin, clave: admin para el ejemplo.')
		}
	}

	return (
		<Container maxWidth="sm" sx={{ mt: 6 }}>
			<Typography variant="h4" gutterBottom>Acceso</Typography>

			<Box component="form" onSubmit={manejarEnvio} noValidate>
				<TextField
					label="Usuario"
					name="usuario"
					fullWidth
					margin="normal"
					required
				/>

				<TextField
					label="Clave"
					name="clave"
					type="password"
					fullWidth
					margin="normal"
					required
				/>

				{error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

				<Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
					<Button type="submit" variant="contained" color="primary">Entrar</Button>
					<Button type="button" variant="outlined" onClick={() => { setError(null) }}>Limpiar</Button>
				</Box>
			</Box>
		</Container>
	)
}
