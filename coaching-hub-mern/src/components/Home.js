import "../styles/home.css"
import ActiveLink from "./ActiveLink"

const Home = () => {
    return <div className="home-container">
               {/* <div class="gallery">
                  <img src="../img/home_background_left.jpg" alt="Archer from Fate/Stay" />
                  <img src="../img/home_background_left.jpg" alt="Saber from Fate/Stay" />
               </div> */}
             <div className="bg-container">
               <ActiveLink to="/">
                  <div className="bg-img-left">
                    <h2 className="game-title">League of Legends</h2>
                  </div>
               </ActiveLink>

               <ActiveLink to="/">
                  <div className="bg-img-right">
                     <h2 className="game-title">Overwatch</h2>
                  </div>
               </ActiveLink>
             </div>
             <ActiveLink to="/coaching">
                <button className="coaching-btn">Coaching buchen</button>
             </ActiveLink>
           </div>
           
}

export default Home