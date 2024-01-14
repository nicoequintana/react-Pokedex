import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { ListOfSearchedPokemons } from "../../components/cards/ListOfSearchedPokemons"
import { getPokemon } from "../../store/thunks/thunks"




export const Search = () => {

  const {name} = useParams()
  const dispatch = useDispatch()
  const { pokemon, allPokemonName } = useSelector(state => state.pokedex)


  const pokemonFiltered = allPokemonName.filter(pokemon => pokemon.name.includes(name))


  return (
    <div>

        <ListOfSearchedPokemons searchedPokemons={pokemonFiltered}/>
        {/* <ListOfCards arrayOfPokemons={pokemonFiltered} /> */}
    </div>
  )
}
