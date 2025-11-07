import type { FC } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Login: FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
        Edgar Javier Quesada Morales
      </Typography>

      <Typography variant="h2" gutterBottom>
        Ejemplo de tipografías y colores del tema
      </Typography>

      <Typography variant="h3" color="text.primary" gutterBottom>
        Subtitle / H3
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Este es subtitle1 con color secundario del tema
      </Typography>

      <Typography variant="body1" gutterBottom>
        Texto body1: usa el color por defecto del tema y sirve para párrafos de contenido.
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
        Caption: texto pequeño de ayuda
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: 'wrap' }}>
        <Button variant="text" color="primary">Text Primary</Button>
        <Button variant="contained" color="primary">Contained Primary</Button>
        <Button variant="outlined" color="primary">Outlined Primary</Button>

        <Button variant="contained" color="secondary">Contained Secondary</Button>
        <Button variant="outlined" color="secondary">Outlined Secondary</Button>

        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>
    </Container>
  );
};

export { Login };