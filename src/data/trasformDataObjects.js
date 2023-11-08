import { _extractId } from '../utils/utils'

const _transformPersonData = (person) => {
	return {
		id: _extractId(person),
		name: person.name,
		birth_year: person.birth_year,
		eye_color: person.eye_color,
		gender: person.gender,
		films: person.films,
		hair_color: person.hair_color,
		height: person.height,
		homeworld: person.homeworld,
		mass: person.mass,
		skin_color: person.skin_color,
		species: person.species,
		starships: person.starships,
		vehicles: person.vehicles
	}
}
const _transformPlanetData = (planet) => {
	return {
		id: _extractId(planet),
		name: planet.name,
		rotation_period: planet.rotation_period,
		orbital_period: planet.orbital_period,
		diameter: planet.diameter,
		climate: planet.climate,
		gravity: planet.gravity,
		terrain: planet.terrain,
		surface_water: planet.surface_water,
		population: planet.population,
		residents: planet.residents,
		films: planet.films,
	}
}

export {
	_transformPersonData,
	_transformPlanetData
}

