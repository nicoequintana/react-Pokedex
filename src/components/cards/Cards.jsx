
import { useNavigate } from 'react-router-dom';
import { colorByType } from '../../assets/utils/colorByType';
import css from '../../styles/modules/card.module.scss';



export const Cards = ({pokemon}) => {

  const colors = colorByType;
  const type = pokemon?.type[0][0].type.name
  const background = colors[type]
  const navigate = useNavigate()

  const goToDetail = () => {
    navigate(`/pokedex/${pokemon.name}/${pokemon.id}`)
  }

  return (
    <div className={css.card} 
      style={
        {background: background,}
      }
      onClick={goToDetail}
      >
      

        <div className={css.cardText}>

          <span># {pokemon.id}</span>
          <p>{pokemon.name}</p>

          <div className={css.cardTextTypes}>
            {
              pokemon?.type?.map(t => (
                t?.map( e => (
                  <span key={e.type.name}>{e.type.name}</span>
                ))
              ))
            }
          </div>

        </div>

        <div className={css.cardImg}>

          <img src={pokemon.image} alt={`imagen del pokemon ${pokemon.name}`}/>

        </div>
    </div>
  )
}



