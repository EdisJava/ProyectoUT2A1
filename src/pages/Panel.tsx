import { Box, Typography } from '@mui/material'

export default function Panel(){
	return (
		<Box sx={{ p:3 }}>
			<Typography variant="h4" gutterBottom>Panel </Typography>
			<Typography> Aqui van cosas.</Typography>
		</Box>
	)
}
