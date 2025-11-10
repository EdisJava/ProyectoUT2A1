import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const temaLumos = createTheme({
	palette: {
		primary:   { main: '#264653' },
		secondary: { main: '#e76f51' },
		background:{ default: '#f7f7f7' }
	},
	typography: { fontFamily: 'Inter, system-ui, Arial' }
})

export function ProveedorTema({ children }:{ children: React.ReactNode }){
	return (
		<ThemeProvider theme={temaLumos}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

export default ProveedorTema
