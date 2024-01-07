import { useSelector } from 'react-redux'
import { ListOfCards } from '../../components/cards/ListOfCards'
import css from '../../styles/modules/pokedexPage.module.scss'
import 'animate.css'
import { FowardBtn } from '../../components/buttons/FowardBtn'
import { BackBtn } from '../../components/buttons/BackBtn'


export const Pokedex = () => {

    const {listOfPokemon} = useSelector(state => state.pokedex)


  return (
    <main className={`${css.pokedex} animate__animated animate__fadeIn`}>
        <h1>Pokedex</h1>

        <div className={css.paginationButtonsContainer}>
          <BackBtn />
          <FowardBtn />
        </div>

        <div className={css.pokedexContainer}>
            
          <ListOfCards arrayOfPokemons={listOfPokemon}/>

        </div>
    </main>
  )
}
