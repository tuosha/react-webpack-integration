import HeaderNavigation from '../HeaderNagation/HeaderNagation'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<>
			<header className="app-header">
				<HeaderNavigation />
			</header>
			<main>
				<section>
					<Outlet/>
				</section>
			</main>
			<footer className="app-footer">
				Syntheza 2023
			</footer>
		</>
	)
}
export default App
