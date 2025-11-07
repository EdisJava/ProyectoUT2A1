import type { FC } from 'react'

const Encabezado: FC = () => {
  return (
    <header aria-labelledby="app-title" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: 'transparent'
    }}>
      <h1 id="app-title" style={{margin:0}}>Mi Aplicación</h1>
      <nav role="navigation" aria-label="Principal">
        <a href="#" style={{marginRight:16}} aria-label="Ir a inicio">Inicio</a>
        <a href="#" aria-label="Acerca de">Acerca</a>
      </nav>
    </header>
  )
}

export default Encabezado;
