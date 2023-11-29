import { _baseApiUrl, _personsUrl, _planetsUrl } from './urlsList'
import {_transformPersonData, _transformPlanetData} from './trasformDataObjects'

const getDataApiFromServer = async (url) => {
    const response = await fetch(`${_baseApiUrl}` + url)
    if (!response.ok) {
        throw new Error(
          'Can\'t get data from server! Status is: ' + response.status)
    }
    return response.json()
}

const getAllPersons = async () => {
	const persons = await getDataApiFromServer(_personsUrl)
	return persons.results.map(_transformPersonData)
}

const getAllPlanets = async () => {
	const planets = await getDataApiFromServer(_planetsUrl)
	return planets.results.map(_transformPlanetData)
}

const getPerson = async (id) => {
    const person = await getDataApiFromServer(`${_personsUrl + id}`)
	return _transformPersonData(person)
}

export {
	getDataApiFromServer,
    getAllPersons,
    getAllPlanets,
    getPerson,
}