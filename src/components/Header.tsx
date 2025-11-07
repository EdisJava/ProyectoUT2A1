import type { FC } from 'react'

const Encabezado: FC = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: 'transparent'
    }}>
      <h1 style={{margin:0}}>Mi Aplicación</h1>
      <nav>
        <a href="#" style={{marginRight:16}}>Inicio</a>
        <a href="#">Acerca</a>
      </nav>
    </header>
  )
}

export default Encabezado;
