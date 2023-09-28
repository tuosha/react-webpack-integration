import UseEffectsHook from '../../tests/Hooks/UseEffectsHook/UseEffectsHook'
import TwoWayBinding from '../../tests/Hooks/CustomHooks/TwoWayBinding/TwoWayBinding'
import HeaderNavigation from '../HeaderNagation/HeaderNagation'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<>
			<header className="app-header">
				<HeaderNavigation/>
			</header>
			<main>
			</main>
			<section>
				<Outlet/>
			</section>
			<section>
				<UseEffectsHook/>
				<TwoWayBinding/>
			</section>
			<footer className="app-footer">
				Syntheza 2023
			</footer>
		</>
	)
}
export default App
