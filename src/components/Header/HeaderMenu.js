"use client"

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import menuHamburger from '@/public/menuHamburger.png';
import BooleanRangeInput from '../BooleanRangeInput/BooleanRangeInput';

import linkedInLogo from "@/public/linkedInLogo.png"

export default function HeaderMenu(){
    
    const [menuCollapse, setMenuCollapse] = useState(true);
    const [light,setLight] = useState(false );
    const [windowIsDefined, setWindowIsDefined] = useState(false);
    const [isNoticed,setIsNoticed] = useState(false);
    // const noticeContainer = useRef(null);
    const [noticeCollapse,setNoticeCollapse] = useState(false);
    const [scrollBackTo,setScrollBackTo] = useState(0);
    const stheme = new Event("switchtheme");

    function setValue(v){
        setLight(v);
        if(!isNoticed) setIsNoticed((true));
        if(windowIsDefined){
            window.localStorage.setItem("light",v);
            window.document.dispatchEvent(stheme);
        }
    }

    useEffect(()=>{
        if(typeof window !== "undefined" && !windowIsDefined){
            setWindowIsDefined(true);
            setTimeout(async ()=>{
                //Code pour ajouter une popup pour informer l'utilisateur qu'on peut changer de thème
                setNoticeCollapse(true);

                window.document.children[0].classList.add("unscrollable");
                window.document.children[0].classList.add("noticeOpened");
                
            },10000);
        }
        if(typeof window !== "undefined" && windowIsDefined){
            if(light) window.document.body.classList.add("light-mode");
            else window.document.body.classList.remove("light-mode");
        }
    },[light,windowIsDefined]);

    function closeNotice(){
        
        window.document.children[0].classList.remove("unscrollable");
        window.document.children[0].classList.remove("noticeOpened");

        setNoticeCollapse(false);
    }

    return(
        <div className="menuHeader_parentContainer">
            <div className="menuHeader_container" data-collapse={menuCollapse}>
                <ul className="headerMenu">
                    <div className="close_container mobile text-right stayWhiteLightMobile"><span onClick={()=>{setMenuCollapse(true)}}>&times;</span></div>
                    <li className="stayWhiteLightMobile"><Link onMouseUp={()=>{setMenuCollapse(true)}} href="/#quiSuisJeSection">Qui suis-je ?</Link></li>
                    <li className="stayWhiteLightMobile"><Link onMouseUp={()=>{setMenuCollapse(true)}} href="/#servicesSection">Mes services</Link></li>
                    {/* <li className="stayWhiteLightMobile"><Link onMouseDown={()=>{setMenuCollapse(true)}} href="/#lexique">Lexique</Link></li> */}
                    <li className="stayWhiteLightMobile"><Link onMouseUp={()=>{setMenuCollapse(true)}} href="/contact">Contact</Link></li>
                </ul>
            </div>
            
            <div className="themeNoticePopup_container" data-collapse={noticeCollapse}>
                <div>
                    <div className="notice_title">Juste une petite seconde !</div>
                    <div className="notice_content">Vous pouvez personnaliser votre expérience et changer de thème en cliquant sur ce bouton.</div>
                    <div><div className="notice_btn" onClick={closeNotice}>Ok, c'est compris !</div></div>
                </div>
            </div>
            <BooleanRangeInput value={light} setValue={setValue} labelTrue="Creative" labelFalse="Space" id="switchThemeBtn"/>

            <div><Link href="https://www.linkedin.com/in/bintou-fofana"><Image src={linkedInLogo} className="linkedInLogo"/></Link></div>

            <div className="mobile menuHamburger_container" onClick={()=>{setMenuCollapse(false)}}>
                <Image src={menuHamburger} className="mobileMenuTriggerer invertLight" alt="Menu triggerer : Hamburger" width="30" height="auto"/>
            </div>
        </div>
    )
}