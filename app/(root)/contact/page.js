import "./style.css"
import ContactForm from "@/src/components/ContactForm/ContactForm.js"
import Image from "next/image";
import Link from "next/link";

import linkedIn from "@/public/linkedInLogo.png"

export default function Page() {
    return(
        <main>
            <section>
                <h1>Contact</h1>
                <div className="flex_container">
                    <div>
                        <h2 className="mobile form_title">Formulaire de contact</h2>
                        <ContactForm/>
                    </div>    
                    <div>
                        <div className="infos_txt">Un formulaire de contact est en cours de préparation, il permettra de faciliter d'avantage la prise de contact. En attendant, je voici ci-dessous mon mail et mon numéro de téléphone, je reste à votre disposition et vous répondrai dans les plus brefs délais.</div>
                        <div className="info_bloc">
                            <div className="info_title">Tèl</div>
                            <div>07 81 90 65 74</div>
                        </div>
                        <div className="info_bloc">
                            <div className="info_title">E-mail</div>
                            <div>fofana_bintou@outlook.fr</div>
                        </div>
                    
                        <div><Image className="linLogo" src={linkedIn}/>Retrouvez moi aussi sur <Link className="linLink" href="https://www.linkedin.com/in/bintou-fofana">LinkedIn</Link></div>
                    </div>    
                </div>    
            </section>
        </main>
    )
}