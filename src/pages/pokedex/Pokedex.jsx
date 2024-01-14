import { useSelector } from 'react-redux'
import { ListOfCards } from '../../components/cards/ListOfCards'
import { Loader } from '../../components/loader/Loader'
import { FowardBtn } from '../../components/buttons/FowardBtn'
import { BackBtn } from '../../components/buttons/BackBtn'
import css from '../../styles/modules/pokedexPage.module.scss'
import 'animate.css'


export const Pokedex = () => {

    const {listOfPokemon, isLoading} = useSelector(state => state.pokedex)


  return (
    <>
    {
      isLoading
      ? <Loader />
      :
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

    }
    </>
  )
}
