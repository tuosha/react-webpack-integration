import { compose } from '../../utils/utils'
import { withData, withListOptions, withSpinner } from './HOCHelpers'
import { getAllPersons, getAllPlanets } from '../../data/getDataApi'
import ItemsList from '../ItemsList/ItemsList'
import Spinner from '../Spinner/Spinner/Spinner'
import NewSpinner from '../Spinner/NewSpinner/NewSpinner'

const PersonListWithDataAndSpinner =
  compose(
	withData(getAllPersons),
	withSpinner(Spinner),
	withListOptions({deleteBtn: true})
  )(ItemsList)

const PlanetsListWithDataAndSpinner =
  compose(
	withData(getAllPlanets),
	withSpinner(NewSpinner),
	withListOptions({deleteBtn: true})
  )(ItemsList)

export {
	PlanetsListWithDataAndSpinner,
	PersonListWithDataAndSpinner
}