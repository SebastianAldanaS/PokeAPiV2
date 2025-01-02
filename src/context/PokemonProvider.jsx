import { useState } from "react"
import { PokemonContext } from "./PokemonContext"
import { useEffect } from "react"
import { useForm } from "../hook/useForm"

export const PokemonProvider = ({ children }) => {

    const [globalPokemon, setGlobalPokemon] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    //Formulario de busqueda
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })

    //Estados Simples
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    // los primeros 50 pokemon a la api
    const getAllPokemon = async (limit = 24) => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const res = await fetch(url)
        const data = await res.json()


        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemon([...allPokemon, ...results])
        setLoading(false)
    }

    //Todos los Pokemons

    /*const getGlobalPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
        const res = await fetch(url)
        const data = await res.json()

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemon(results)
        setLoading(false)
    }*/

    //Llamar un pokemon por su id
    const getPokemonById = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const data = await res.json()
        return data
    }


    useEffect(() => {
        getAllPokemon()
    }, [])

    /*useEffect(() => {
        getGlobalPokemon()
    }, [])*/

    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemon,
            globalPokemon,
            getPokemonById,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}
