import { createBrowserRouter } from 'react-router-dom'
import App from '../../components/App/App'
import RouterErrorPage from '../RouterErrorPage/RouterErrorPage'
import PersonsList from '../../components/PersonsList/PersonsList'
import PlanetsList from '../../components/PlanetsList/PlanetsList'
import { BaseTable } from '../../components/BaseTable/BaseTable'

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
				path: 'table',
				element: <BaseTable/>,
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