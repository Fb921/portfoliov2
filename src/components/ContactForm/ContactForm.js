import "./ContactForm.css";

export default function ContactForm(){
    return(
        <div className="contactForm_container">
            <div className="inf_txt">Bientôt dipsonible</div>
            <form className="form">
                <div>
                    <label>Nom</label>
                    <input placeholder="Votre nom de famille"/>
                </div>
                <div>
                    <label>Prénom</label>
                    <input placeholder="Votre prénom"/>
                </div>
                <div>
                    <label>E-mail</label>
                    <input placeholder="Votre adresse mail"/>
                </div>
                <div>
                    <label>Sujet</label>
                    <input placeholder="Le sujet de votre message"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea/>
                </div>
                <div className="buttonContainer">
                    <div className="sendMsg_btn">Envoyer</div>
                </div>
            </form>
        </div>
    )
}