
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoPokemon.png'
import css from '../../styles/modules/header.module.scss'
import { SearchPokemon } from '../form/SearchPokemon'


export const Header = () => {


  return (
    <>
        <div className={css.header}>

            <div className={css.headerContent}>
                <div className={css.imgContainer}>
                    <img src={logo} alt='logo de pokemon'/>
                </div>
                <nav className={css.nav}>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/pokedex'>Pokedex</Link></li>
                        <li><Link to='/favourites'>Favs</Link></li>
                    </ul>
                </nav>
                <SearchPokemon />
            </div>

        </div>
    </>
  )
}
