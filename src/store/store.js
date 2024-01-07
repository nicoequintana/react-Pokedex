import { configureStore } from '@reduxjs/toolkit'
import { pokedexSlice } from './slice'

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice.reducer
  },
})
