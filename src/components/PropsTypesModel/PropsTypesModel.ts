type GetData = () => Promise<Array<object>>
type TypedObject = Record<string, () => string>
type HandleDeleteType = (id: string) => void

interface PersonDataProps {
    id: number,
    name: string,
    birth_year: number,
    eye_color: string,
    gender: string,
    films: Array<string>,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: number,
    skin_color: string,
    species: string,
    starships: Array<string>,
    vehicles: string

}
interface PlanetDataProps {
    id: number
    name: string
    rotation_period: number,
    orbital_period: number,
    diameter: number,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: number,
    residents: Array<string>,
    films: Array<string>,
}
interface ItemType {
    id: string
}
interface OptionsType {
    options: object
}
interface OptionsTypeProps {
    deleteBtn?: boolean,
    addBtn?: boolean
}
interface DataType {
    data: Array<object>
}
interface PersonsProps {
    data: PersonDataProps[]
}
interface PlanetsProps {
    data: PlanetDataProps[]
}

export {
    PersonsProps,
    PlanetsProps,
    GetData,
    HandleDeleteType,
    TypedObject,
    DataType,
    OptionsType,
    OptionsTypeProps,
    ItemType
}
