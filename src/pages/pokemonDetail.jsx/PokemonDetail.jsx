import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getPokemon } from "../../store/thunks/thunks"
import { favPokemons } from "../../store/slice/slice";
import { Loader } from "../../components/loader/Loader";
import { BarStat } from "../../components/statBar/BarStat";
import { CiStar } from "react-icons/ci";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { colorByType } from "../../assets/utils/colorByType";
import css from '../../styles/modules/pokemonDetails.module.scss'

export const PokemonDetail = () => {
    
    const colors = colorByType;
    const favStar = useRef()
    const {pokemon, isLoading, favourites} = useSelector(state => state.pokedex);
    const {name, id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    //const pokemonSelected = allPokemonName.find(poke => poke.name === name)


    useEffect(() => {
      dispatch(getPokemon(id))
    }, [])

    const backNavigate = () => {
      navigate( -1 )
    }

    const handleFav = (name) => {
      dispatch(favPokemons(name))
    }


  return (
    <>
    {
        isLoading
        ?
        <Loader />
        :
        <div className={`${css.detailContainer} animate__animated animate__fadeIn`}>
            <div className={css.overlay}>
                <div className={css.detailActionBtnContainer}>
                    <span onClick={backNavigate}><FaArrowLeft /></span>
                    <span ref={favStar} onClick={() => handleFav(pokemon.name)}>
                    
                      {
                        (favourites.find(poke => poke.name == name)) 
                        ? <FaStar /> 
                        : <CiStar />
                      }
                    </span>
                </div>
                <div className={css.name_idContainer}>
                    <span>#{pokemon.id}</span>
                    <p>{pokemon.name}</p>
                </div>
                <div className={css.detailImgContainer}>
                    <img src={pokemon.image} />
                </div>
                <div className={css.detailTypesContainer}>
                    {
                      pokemon?.type?.map(t => (
                        t?.map( e => (
                          <span key={e.type.name}>{e.type.name}</span>
                        ))
                      ))
                    }
                </div>
                <div className={css.detailStatsContainer}>
                        <h3>Pokeinfo</h3>
                        <p>{pokemon?.flavor}</p>
                    {
                      pokemon?.stats?.map( stat => (
                          <div className={css.stats} key={stat.stat.name}>
                            <p>{`${stat.stat.name}:`}</p>
                            <BarStat stat={stat}/>
                          </div>
                        ))
                    }
                </div>
            </div>
        </div>
    }
    </>
  )
}
