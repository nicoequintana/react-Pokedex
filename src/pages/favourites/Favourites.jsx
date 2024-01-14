
import { ListOfCards } from '../../components/cards/ListOfCards'
import 'animate.css'
import css from '../../styles/modules/favouritesPage.module.scss'



export const Favourites = () => {

    const favPokemons = JSON.parse(localStorage.getItem('fav')) || []

  return (
    <main className={`${css.favourites} animate__animated animate__fadeIn`}>
        <div className={css.overlay}>
            <h1>Favourites Pokemons</h1>
            <div className={css.favouritesContainer}>
                {
                    (favPokemons.length === 0)
                    ?<h2>No hay pokemons guardados en favoritos</h2>
                    :<ListOfCards arrayOfPokemons={favPokemons}/>
                }
            </div>
        </div>
    </main>
  )
}
