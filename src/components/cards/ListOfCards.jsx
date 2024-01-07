import { Cards } from "./Cards"
import css from '../../styles/modules/card.module.scss'


//aca voy a recibir un array, puede ser de los 20 de la paginacion, los favoritos, o los resultados de una busqueda por el input. tiene que ser un componente muy generico
export const ListOfCards = ({arrayOfPokemons = []}) => {



  return (
    <div className={css.cardsContainer} >
        {
            arrayOfPokemons.map( (e, i) => (
                <Cards
                  key={e.id}
                  pokemon={e}
                />
            ))
        }
    </div>
  )
}
