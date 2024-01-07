
import css from '../../styles/modules/loader.module.scss'

export const Loader = () => {
    return (
        <div className={css.loarderContainer}>
            <span className={css.loader}></span>
        </div>
      )
  }