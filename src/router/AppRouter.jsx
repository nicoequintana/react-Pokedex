import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Pokedex } from "../pages/pokedex/Pokedex"
import { PokemonDetail } from "../pages/pokemonDetail.jsx/PokemonDetail"
import { Favourites } from "../pages/favourites/Favourites"
import { Search } from "../pages/search/Search"





export const AppRouter = () => {



  return (
    <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/pokedex" element={ <Pokedex /> }/>
        <Route path="/pokedex/:name/:id" element={ <PokemonDetail /> }/>
        <Route path="/favourites" element={ <Favourites /> }/>
        <Route path="/search/:name" element={ <Search /> }/>

        <Route path="/*" element={ <Home /> }/>
    </Routes>
  )
}
