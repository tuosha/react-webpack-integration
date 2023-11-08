import { compose } from '../../utils/utils'
import { withData, withSpinner, withDataFilter, withListOptions } from './HOCHelpers'
import { getAllPersons, getAllPlanets } from '../../data/getDataApi'
import ItemsList from '../ItemsList/ItemsList'
import Spinner from '../Spinner/Spinner/Spinner'
import NewSpinner from '../Spinner/NewSpinner/NewSpinner'
import {
	personsFilteredData,
	planetsFilteredData,
} from '../../services/Filters/viewPersonDataFilter'
import { defaultListOptions } from '../../services/Filters/listOptions'

const PersonListWithDataAndSpinner =
	compose(
		withData(getAllPersons),
		withSpinner(Spinner),
		withDataFilter(personsFilteredData),
		withListOptions(defaultListOptions),
	)(ItemsList)

const PlanetsListWithDataAndSpinner =
	compose(
		withData(getAllPlanets),
		withSpinner(NewSpinner),
		withDataFilter(planetsFilteredData),
		withListOptions(defaultListOptions),
	)(ItemsList)

export {
	PlanetsListWithDataAndSpinner,
	PersonListWithDataAndSpinner,
}