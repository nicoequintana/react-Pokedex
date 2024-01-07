import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { nextPageOfPokemons } from "../../store/thunks/thunks";
import css from '../../styles/modules/btnPagination.module.scss'

export const FowardBtn = () => {

    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.pokedex)

    const handlePagination = () => {

        dispatch(nextPageOfPokemons())
    }

  return (
    <button className={css.paginationBtnStyles} disabled={isLoading} onClick={handlePagination}>
    <FaArrowRight /> 
    </button>
  )
}
