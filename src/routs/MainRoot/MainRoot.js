import { createBrowserRouter } from 'react-router-dom'
import App from '../../components/App/App'
import RouterErrorPage from '../../components/RouterErrorPage/RouterErrorPage'
import PersonsList from '../../components/PersonsList/PersonsList'
import PlanetsList from '../../components/PlanetsList/PlanetsList'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		errorElement: <RouterErrorPage/>,
		children: [
			{
				path: 'persons',
				element: <PersonsList/>,
			},
			{
				path: 'planets',
				element: <PlanetsList/>,
			},
		],
	},
])

export {
	router
}