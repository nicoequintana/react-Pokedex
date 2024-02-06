import { pokeApiRest } from "../../api/pokeApiRest"
import { handlePage, setActivePokemon, setAllPokemon, setPokemonList, setSearchedPokemons, startLoading } from "../slice/slice"



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

        const {data} = await pokeApiRest.get(`/pokemon/?limit=50&offset=${page * 50}`)

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


export const getPokemon = (id) => {

    return async(dispatch) => {

        dispatch(startLoading())
        
        const {data} = await pokeApiRest.get(`/pokemon/${id}`)
        
        try {
            const {data: flavor} = await pokeApiRest.get(`pokemon-species/${id}`)
            var pokemonFlavor = flavor.flavor_text_entries.find( flavor => flavor.language.name === 'es')
            

        } catch (error) {
            console.log('error al obtener FLAVOR del pokemon seleccionado. No existe en la PokeAPI')
        }
        

        const pokemonDetails = {
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default, 
            id: data.id,
            stats: data.stats,
            type: [data.types],
            weight: data.weight,
            height: data.height,
            flavor: pokemonFlavor?.flavor_text,
        }

        dispatch(setActivePokemon({pokemonDetails}))

    }
}


export const getSearchedPokemons = (pokemons = {}) => {

    return async(dispatch) => {

        dispatch(startLoading())
        
        const promises = pokemons.map(async(poke) => {
            
            const URL_ID = poke.url.split('/')
            const id = parseInt(URL_ID[URL_ID.length - 2])

            const {data} = await pokeApiRest.get(`/pokemon/${id}`)

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

        const pokemonDetails = await Promise.all(promises)
        

        dispatch(setSearchedPokemons(pokemonDetails))
    }
}



//TODO: conseguir la cadena evolutiva de cada pokemon

export const getEvolutionChain = (id) => {
    return async(dispatch, getState) => {
        dispatch(startLoading())

        const {data} = await pokeApiRest.get(`/evolution-chain/${id}`)
        console.log(data.chain.evolves_to[0].species.name)
        console.log(data.chain?.evolves_to[0]?.evolves_to[0]?.species?.name)
        console.log(id)

        
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
        if( page === 0) return 
        dispatch(handlePage({page: page - 1}))
    }
} 


