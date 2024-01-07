import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { prevPageOfPokemons } from "../../store/thunks/thunks";
import css from '../../styles/modules/btnPagination.module.scss'

export const BackBtn = () => {

    const dispatch = useDispatch()
    const {isLoading, page} = useSelector(state => state.pokedex)

    const handlePagination = () => {
        dispatch(prevPageOfPokemons())
    }

  return (
    <button className={css.paginationBtnStyles} disabled={isLoading || page == 0} onClick={handlePagination}>
    <FaArrowLeft  />
    </button>
  )
}
