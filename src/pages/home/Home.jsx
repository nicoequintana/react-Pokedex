
import news1 from '../../assets/images/NEWS_scarlet-violet.png'
import news2 from '../../assets/images/NEWS_scarlet-violet-169-en.png'
import news3 from '../../assets/images/NEWS_pokemon-go-169.png'
import news4 from '../../assets/images/NEWS_pokemon-go-rocketTeam.jpg'
import game1 from '../../assets/images/pokemon-legends-arceus-logo-169-en.jpg'
import game2 from '../../assets/images/pokemon-unite-logo-169.jpg'
import game3 from '../../assets/images/scarlet-violet-logo-169-en.jpg'
import css from '../../styles/modules/homePage.module.scss'


export const Home = () => {


  return (
    <>
      <section className={css.homeContainer}>
        <h1> Conoce todo sobre el mundo Pokemon! </h1>

        <section className={css.newsContainer}>
          <h2>Noticias InfoDex</h2>

          <div className={css.newsCards}>
            <div className={`${css.card}`}>
              <img src={news1} alt="news about Valentin's day"/>
              <div className={css.cardTxt}>
                <h3>Earn Sweet Rewards with Luvdisc This Valentine’s Day</h3>            
                <p>Luvdisc is appearing more frequently in Pokémon Scarlet and Pokémon Violet Tera Raid Battles, with additional Exp. Candy and Rare Candy as potential bonus rewards.</p>
              </div>
            </div>

            <div className={`${css.card}`}>
              <img src={news2} alt="news about Valentin's day"/>
              <div className={css.cardTxt}>
                <h3>Blueberry Points in The Hidden Treasure of Area Zero Part 2: The Indigo Disk</h3>            
                <p>Customize your clubroom, meet with your favorite Trainers, and more by using Blueberry Points in the DLC for the Pokémon Scarlet and Pokémon Violet games.</p>
              </div>
            </div>

            <div className={`${css.card}`}>
              <img src={news3} alt="news about mega Latios and mega Latias"/>
              <div className={css.cardTxt}>
                <h3>Mega Latias and Mega Latios Pokémon GO Raid Battle Strategy</h3>            
                <p>Mega Latias and Mega Latios are dual Dragon- and Psychic-type Pokémon originally discovered in the Hoenn region. They are both highly intelligent and capable of understanding human speech.</p>
              </div>
            </div>

            <div className={`${css.card}`}>
              <img src={news4} alt="news about Valentin's day"/>
              <div className={css.cardTxt}>
                <h3>Defeat Team GO Rocket’s Sierra, Cliff, Arlo, and Giovanni in Pokémon GO</h3>            
                <p>Learn which Pokémon the heads of Team GO Rocket may use in battle and how best to counter them.</p>
              </div>
            </div>
            
          </div>


        </section>

        <section className={css.gamesContainer}>

        <h2>Ultimate Games</h2>
        <div className={css.newsCards}>
            <div className={`${css.cardGame}`}>
              <img src={game1} alt="news about Valentin's day"/>
              <div className={css.cardGameTxt}>
                <h3>Pokemon Legends Arceus</h3>
              </div>
            </div>

            <div className={`${css.cardGame}`}>
              <img src={game2} alt="news about mega Latios and mega Latias"/>
              <div className={css.cardGameTxt}>
                <h3>Pokemon UNITE</h3>
              </div>
            </div>

            <div className={`${css.cardGame}`}>
              <img src={game3} alt="news about Valentin's day"/>
              <div className={css.cardGameTxt}>
                <h3>Pokemon Scarlet & Violet</h3>
              </div>
            </div>
        </div>

        </section>


      </section>
    </>
  )
}
