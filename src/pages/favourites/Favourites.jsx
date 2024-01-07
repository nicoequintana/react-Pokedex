
import { ListOfCards } from '../../components/cards/ListOfCards'
import css from '../../styles/modules/favouritesPage.module.scss'



export const Favourites = () => {

    const favPokemons = JSON.parse(localStorage.getItem('fav')) || []

  return (
    <main className={`${css.favourites} animate__animated animate__fadeIn`}>
        <h1>Favourites Pokemons</h1>
    
        <div className={css.favouritesContainer}>
            {
                (favPokemons.length === 0) 
                ?<h2>No hay pokemons guardados en favoritos</h2>
                :<ListOfCards arrayOfPokemons={favPokemons}/>
            }
        </div>
    </main>
  )
}
