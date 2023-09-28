import { Link } from 'react-router-dom'
import './HeaderNagation.css'

const HeaderNavigation = () => {
	return (
		<nav className="header-navigation-nav">
			<Link to={'/'}>Home</Link>
			<Link to={`persons`}>Persons</Link>
			<Link to={`planets`}>Planets</Link>
		</nav>
	)
}

export default HeaderNavigation