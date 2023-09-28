import {useRouteError} from 'react-router-dom'
import './RouterErrorPage.css'
import routerErrorImg from '../../images/router-error-img.jpg'

const RouterErrorPage = () => {
	const error = useRouteError();
	console.log(error)
	return(
	  <div className='error-page'>
		  <h2 className='error-page__header'>Sorry, can't find page!</h2>
		  <p className='error-page__message'>Error status is: {error.status || error.message}</p>
		  <img src={routerErrorImg} className='router-error__img' alt='router-error-img'/>
	  </div>
	)
}

export default RouterErrorPage