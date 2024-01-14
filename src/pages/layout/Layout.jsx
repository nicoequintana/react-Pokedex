import { useEffect } from "react"
import { Footer, Header } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemon, getPokemonList } from "../../store/thunks/thunks"
import css from '../../styles/modules/layout.module.scss'

export const Layout = ({children}) => {

    const { page } = useSelector(state => state.pokedex)
    const dispatch = useDispatch();

    useEffect(() => {
      
        dispatch(getPokemonList(page))
        
    }, [page])

    
    useEffect(() => {
      
         dispatch(getAllPokemon())
        
    }, [])
    


  return (
    <div className={css.layoutContainer}>
        <Header />

            <div className={css.layoutChildrenContainer}>
                {children}
            </div>
            
        <Footer />

    </div>
  )
}
