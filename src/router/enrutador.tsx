import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Acceso from '../pages/Acceso'
import Panel from '../pages/Panel'
import Estadisticas from '../pages/Estadisticas'
import PaginaError from '../pages/PaginaError'
import Home from '../pages/Home'
import Reports from '../pages/Reports'

const rutas = createBrowserRouter([
	{ path: '/', element: <Navigate to="/acceso" replace />, errorElement: <PaginaError /> },
	{ path: '/acceso', element: <Acceso />, errorElement: <PaginaError /> },
	{ path: '/panel', element: <Panel />, errorElement: <PaginaError /> },
	{ path: '/estadisticas', element: <Estadisticas />, errorElement: <PaginaError /> }
	,{ path: '/home', element: <Home />, errorElement: <PaginaError /> }
	,{ path: '/reports', element: <Reports />, errorElement: <PaginaError /> }
])

export function ProveedorRutas(){
	return <RouterProvider router={rutas} />
}

export default ProveedorRutas
