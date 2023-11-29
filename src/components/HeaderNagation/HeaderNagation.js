import { Link } from 'react-router-dom'
import './HeaderNagation.css'

const HeaderNavigation = () => {
	return (
		<nav className="header-navigation__list">
			<Link to={'/'}>Home</Link>
			<Link to={`persons`}>Persons</Link>
			<Link to={`planets`}>Planets</Link>
			<Link to={'table'}>Table view</Link>
		</nav>
	)
}

export default HeaderNavigation