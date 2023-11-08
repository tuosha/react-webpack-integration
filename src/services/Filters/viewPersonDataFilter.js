import { filteredData } from '../../utils/utils'

const defaultPersonData = {
	id: true,
	name: true,
	birth_year: true,
	eye_color: true,
	gender: false,
	films: false,
	hair_color: false,
	height: false,
	homeworld: false,
	mass: false,
	skin_color: false,
	species: false,
	starships: true,
	vehicles: false
}

const defaultPlanetData = {
	id: true,
	name: true,
	rotation_period: true,
	orbital_period: true,
	diameter: true,
	climate: true,
	gravity: true,
	terrain: true,
	surface_water: true,
	population: true,
	residents: true,
	films: true,
}

const personsFilteredData = filteredData(defaultPersonData)
const planetsFilteredData = filteredData(defaultPlanetData)

export {
	personsFilteredData,
	planetsFilteredData
}