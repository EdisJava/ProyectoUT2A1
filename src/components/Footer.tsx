import type { FC } from 'react'

const Pie: FC = () => {
  return (
    <footer style={{
      padding: '1rem 2rem',
      marginTop: 'auto'
    }}>
      <small>© {new Date().getFullYear()} - Proyecto UT2A1</small>
    </footer>
  )
}

export default Pie;
