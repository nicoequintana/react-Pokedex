
import { useForm } from '../../hooks/useForm'
import css from '../../styles/modules/searchInput.module.scss'



export const SearchPokemon = () => {


  const { pokemonSearched, handleInput, onSubmit } = useForm();



  return (
    <form 
      onSubmit={onSubmit}
      className={css.formStyle}
    >
      <input 
        className={css.inputStyle}
        type="text"
        placeholder="🔍'Pikachu'"
        name="pokemonSearched"
        value={pokemonSearched}
        onChange={handleInput}
      />
    </form>
  )
}
