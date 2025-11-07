import type { FC } from 'react'
import { Login } from './Login'
import Encabezado from '../components/Header'
import Pie from '../components/Footer'

const MainPage: FC = () => {
	return (
		<div style={{display:'flex', minHeight:'100vh', flexDirection:'column'}}>
					<Encabezado />
			<main style={{flex:1, padding: '2rem'}}>
				<Login />
			</main>
					<Pie />
		</div>
	)
}

export default MainPage
