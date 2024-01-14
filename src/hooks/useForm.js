import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



export const useForm = (initialState = '') => {


    const [pokemonSearched, setPokemonSearched] = useState(initialState)
    
    const navigate = useNavigate()

    const handleInput = ({target}) => {
        const {value} = target
        setPokemonSearched(value)
    }

    const onNavigate = (name) => {
        navigate(`/search/${name}`)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
      
        onNavigate(pokemonSearched)

        resetForm()
    }

    const resetForm = () => {
        setPokemonSearched('')
    }


    return{
        pokemonSearched,
        handleInput,
        onSubmit,
    }
}