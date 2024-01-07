import css from '../../styles/modules/statBar.module.scss'



export const BarStat = ({stat}) => {
  
    

    return (
      <div className={css.barStyle}>
          <div 
          className={css.bar}
          style={{width: stat.base_stat}}
          >
      
          </div>
      </div>
    )
}
