import "../styles/coaching.css"
import Calcom from "./Calcom"
import ImageCarousel from "./ImageCarousel";


const Coaching = () => {
    return <div className="coaching-container">
                <div className="coaching-content">
                    <h1>Coaching buchen</h1>
                    <p>Hier findest du nochmal eine Übersicht über unsere Coaches und noch genauere Informationen über sie.</p>
                    <Calcom />
                </div> 
           </div>
}

export default Coaching