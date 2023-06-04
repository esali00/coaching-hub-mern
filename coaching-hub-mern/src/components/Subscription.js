import "../styles/subscription.css"

const Subscription = () => {
    return <div className="subscription-content-container">
                <h1>Unsere Pakete</h1>
                <div className="subscription-container">
                    <div className="offer-package">
                        <h3>Einsteiger-Paket</h3>
                        <p>Zugang zu allen Academy-Inhalten
                           Videokurse für alle Rollen & alle Elos
                           Champions des Patches
                           Arbeiten im eigenen Tempo
                           Regelmäßig neuer Inhalt
                           Jederzeit per Discord oder E-Mail kündbar
                           Ideal zum Ausprobieren
                        </p>
                        <span className="price">9.99 €</span>
                        <button className="sub-btn">Jetzt abonnieren</button>
                    </div>

                    <div className="offer-package">
                        <h3>Halbtags-Paket</h3>
                        <p>
                            Zugang zu allen Academy-Inhalten
                            Videokurse für alle Rollen & alle Elos
                            Champions des Patches
                            Arbeiten im eigenen Tempo
                            Regelmäßig neuer Inhalt
                            Jederzeit per Discord oder E-Mail kündbar
                            Beliebtestes Angebot
                            50%-Rabattcode für ein Coaching
                        </p>
                        <span className="price">14.99 €</span>
                        <button className="sub-btn">Jetzt abonnieren</button>
                    </div>

                    <div className="offer-package">
                        <h3>Vollzeit-Paket</h3>
                        <p>
                            Zugang zu allen Academy-Inhalten
                            Videokurse für alle Rollen & alle Elos
                            Champions des Patches
                            Arbeiten im eigenen Tempo
                            Regelmäßig neuer Inhalt
                            Jederzeit per Discord oder E-Mail kündbar
                            Bestes Preis-Leistungs-Verhältnis
                            50%-Rabattcode für ein Coaching
                        </p>
                        <span className="price">19.99 €</span>
                        <button className="sub-btn">Jetzt abonnieren</button>
                    </div>
                </div>
                
                <div className="content-videos">
                    <h1>Unsere Inhalte</h1>
                    <h2>Unsere Beispielkurse</h2>
                    <div className="video-section-container">
                        <div className="video-container">
                            <video width={"45%"} height={"360px"} controls>
                                <source src="" type="video/mp4" ></source>
                                <source src="" type="video/ogg"></source>
                                Sorry, your browser doesn't support videos.
                            </video>
                            <video width={"45%"} height={"360px"} controls>
                                <source type="video/mp4"></source>
                                <source type="video/ogg"></source>
                                Sorry, your browser doesn't support videos.
                            </video>
                        </div>
                    </div>

                    <div className="video-section-container">
                        <div className="video-container">
                           
                        </div>
                    </div>
                    
                </div>

           </div>
}

export default Subscription