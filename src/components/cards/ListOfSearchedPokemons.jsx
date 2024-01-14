import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSearchedPokemons } from "../../store/thunks/thunks"
import { Cards } from "./Cards"
import { useParams } from "react-router-dom"

import css from '../../styles/modules/card.module.scss'




export const ListOfSearchedPokemons = ({searchedPokemons}) => {

   

    const {name} = useParams()
    const {searchedPokemons: arrayOfSearchedPokemons} = useSelector(state => state.pokedex)
    const dispatch = useDispatch()


    useEffect(() => {
      
        dispatch(getSearchedPokemons(searchedPokemons))
    
    }, [name])
    
    


  return (
    <div className={css.cardsContainer} style={{background: 'grey'}}>
        {
            arrayOfSearchedPokemons.map( e => (
                <Cards 
                    key={e.id}
                    pokemon={e}
                />
            ))
        }
    </div>
  )
}
