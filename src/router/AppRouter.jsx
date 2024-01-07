import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Pokedex } from "../pages/pokedex/Pokedex"
import { PokemonDetail } from "../pages/pokemonDetail.jsx/PokemonDetail"
import { Favourites } from "../pages/favourites/Favourites"





export const AppRouter = () => {



  return (
    <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/pokedex" element={ <Pokedex /> }/>
        <Route path="/pokedex/:name" element={ <PokemonDetail /> }/>
        <Route path="/favourites" element={ <Favourites /> }/>
    </Routes>
  )
}
