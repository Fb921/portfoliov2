"use client"
import "./ContactPopup.css";
import Image from "next/image";
import React, {useRef, useEffect, useState} from "react";

import astronaut from "@/public/astronaut6.png";
import satelite2 from "@/public/sate.png";
import tel from "@/public/telImg.png";
import mail from "@/public/mailImg2.png";

import seaux from "@/public/seaux.png";
import pinceaux from "@/public/pinceaux2.png";

export default function ContactPopup() {

    const [windowIsDefined,setWindowIsDefined] = useState(false);
    const [windowWidth,setWindowWidth] = useState(0);
    const modal = useRef(null);
    const modalContainer = useRef(null);
    const astronautImg = useRef(null);
    const clickContainer = useRef(null);
    const formContainer = useRef(null);

    const [themeSwitched,setThemeSwitched] = useState("false");

    function openModal(){
        modalContainer.current.dataset.modalState = true;
        astronautImg.current.dataset.modalState = true;
        modal.current.dataset.modalState = true;
        clickContainer.current.dataset.modalState = true;
    }
    function closeModal(){
        modalContainer.current.dataset.modalState = false;
        astronautImg.current.dataset.modalState = false;
        modal.current.dataset.modalState = false;
        clickContainer.current.dataset.modalState = false;
    }
    function openContactForm(){
        modal.current.dataset.modalState = false;
        formContainer.current.dataset.displayForm = true;
        clickContainer.current.dataset.modalState = false;
    }
    function closeContactForm(){
        astronautImg.current.dataset.modalState = false;
        modalContainer.current.dataset.modalState = false;
        formContainer.current.dataset.displayForm = false;
    }

    useEffect(()=>{
        if(typeof window !== 'undefined' && !windowIsDefined){
            setWindowWidth(window.innerWidth);
            setWindowIsDefined(true);
            window.onresize = async ()=>{
                setWindowWidth(window.innerWidth);
            }
            window.document.addEventListener("switchtheme",()=>{setThemeSwitched(window.localStorage.getItem("light"));});
        }
    })
    return(
    <div className="contactModal" data-mobile={windowWidth>768?false:true} data-modal-state={false} ref={modalContainer}>
        <div className="form_container" ref={formContainer} data-display-form={false}>
            <form>
                <div className="close_container"><span onClick={closeContactForm}>&times;</span></div>
                <h2>Formulaire de contact</h2>
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
        <div className="clickToTriggerModal_container" data-modal-state={false} ref={clickContainer}>
            <Image src={(themeSwitched=="true")?pinceaux:astronaut} alt="Image astronaute" onClick={openModal} data-modal-state={false} className="astronautImg" ref={astronautImg}/>
            <div className="modalContainer" ref={modal} data-modal-state={false}>
                <div className="close_container"><span onClick={closeModal}>&times;</span></div>
                <h3 className="contactInformation_title">Informations de contact</h3>
                <div className="informationContact"><span><Image alt="logo téléphone" src={tel} className="contactImg"/>Tèl</span> <span className="contactInfo_content">07 81 90 65 74</span></div>
                <div className="informationContact"><span><Image alt="logo e-mail" src={mail} className="contactImg"/>E-mail</span> <span className="contactInfo_content">fofana_bintou@outlook.fr</span></div>
                <button onClick={openContactForm}>Formulaire de contact</button>
                <Image alt="image satelite" src={(themeSwitched=="true")?seaux:satelite2} className="rocketImg"/>
            </div>
        </div>
    </div>)
}