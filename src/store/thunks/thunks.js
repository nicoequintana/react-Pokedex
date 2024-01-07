import { pokeApiRest } from "../../api/pokeApiRest"
import { handlePage, setActivePokemon, setAllPokemon, setPokemonList, startLoading } from "../slice/slice"



export const getAllPokemon = () => {
    return async(dispatch) => {
        dispatch(startLoading())
        const {data} = await pokeApiRest.get(`/pokemon/?limit=1302`)
        dispatch(setAllPokemon(data.results))
    }
}

export const getPokemonList = ( page ) => {

    return async(dispatch, getState) => {

        dispatch(startLoading())

        const {data} = await pokeApiRest.get(`/pokemon/?limit=20&offset=${page * 20}`)

        const promises = data.results.map( async(poke) => {

            const {data} = await pokeApiRest.get(poke.url)

            return {
                name: data.name,
                image: data.sprites.other['official-artwork'].front_default, 
                id: data.id,
                stats: data.stats,
                type: [data.types],
                weight: data.weight,
                height: data.height,
            }
        })

        const pokemonInfo = await Promise.all(promises)

        dispatch(setPokemonList(pokemonInfo))

    }

}


export const getPokemon = (name) => {
    return async(dispatch) => {

        dispatch(startLoading())
        const {data} = await pokeApiRest.get(`/pokemon/${name}`)
        const {data: flavor} = await pokeApiRest.get(`pokemon-species/${data.id}`)
        const pokemonFlavor = flavor.flavor_text_entries.find( flavor => flavor.language.name === 'es')

        

        const pokemonDetails = {
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default, 
            id: data.id,
            stats: data.stats,
            type: [data.types],
            weight: data.weight,
            height: data.height,
            flavor: pokemonFlavor.flavor_text,
        }

        dispatch(setActivePokemon({pokemonDetails}))

    }
}

export const nextPageOfPokemons = () => {

    return async(dispatch, getState) => {
        dispatch(startLoading())
        const {page} = getState().pokedex
        dispatch(handlePage({page: page + 1}))
    }
}

export const prevPageOfPokemons = () => {

    return async(dispatch, getState) => {
        dispatch(startLoading())
        const {page} = getState().pokedex
        if( page === 0) return console.log('estas en la pagina cero')
        dispatch(handlePage({page: page - 1}))
    }
} 


