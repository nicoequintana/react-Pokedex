import { createSlice } from '@reduxjs/toolkit'



export const pokedexSlice = createSlice({

  name: 'pokedex',
  initialState: {
    pokemon: {},
    listOfPokemon: [],
    isLoading: false, 
    page: 0,
    allPokemonName: null,
    favourites: JSON.parse(localStorage.getItem('fav')) || [],
    searchedPokemons: [],
  },

  reducers: {
    startLoading: ( state, /* ACTION */ ) => {
      state.isLoading = true;
    },

    setAllPokemon: (state, action) => {
      state.allPokemonName = action.payload
      state.isLoading = false
    },

    setPokemonList: (state, action) => {
      state.listOfPokemon = action.payload
      state.isLoading = false
    },

    setActivePokemon: (state, action) => {
      state.pokemon = action.payload.pokemonDetails
      state.isLoading = false
    },

    handlePage: (state, action) => {
      state.page = action.payload.page
      state.isLoading = false
    },

    favPokemons: (state, action) => {
      state.isLoading = true

      state.favourites = JSON.parse(localStorage.getItem('fav')) || []

      if(state.favourites.find(poke => poke.name === action.payload)){

        const favUpdate = state.favourites.filter( poke => poke.name !== action.payload)
        state.favourites = favUpdate;
        localStorage.setItem('fav', JSON.stringify(favUpdate))
        state.isLoading = false
      } else{

        state.favourites.push(state.pokemon);
        localStorage.setItem('fav', JSON.stringify(state.favourites))
        state.isLoading = false
      }
    },

    setSearchedPokemons: (state, action) => {
      state.searchedPokemons = action.payload
      state.isLoading = false;
    },

    setEvolutionChain: (state, action) => {

      

      statusbar.isLoading = false

    }

  },
})

// Action creators are generated for each case reducer function
export const { 
  startLoading,
  setPokemonList,
  setAllPokemon,
  setActivePokemon,
  handlePage,
  favPokemons,
  setSearchedPokemons,
  setEvolutionChain,

} = pokedexSlice.actions   