"use client"
import React, {useState, useEffect,useRef} from 'react';
import Image from 'next/image';
import './DynamicGalaxies.css';

import sideGalaxy from '@/public/sideGalaxy.png'
import sideGalaxyMobile from '@/public/sideGalaxyMobile.png'
import mediumPbgGalaxy from  '@/public/smallBluePinkGalaxy.png'
import mediumPbgGalaxyMobile from  '@/public/smallBluePinkGalaxyMobile.png'
import mediumPinkGalaxy from  '@/public/smallPinkGalaxy.png'
import mediumPinkGalaxyMobile from  '@/public/smallPinkGalaxyMobile.png'
import blueGalaxy from  '@/public/blueGalaxy5.png'
import blueGalaxyMobile from  '@/public/blueGalaxy5Mobile.png'
import pbgGalaxy from  '@/public/bluePinkGalaxy5.png'
import pbgGalaxyMobile from  '@/public/bluePinkGalaxy5Mobile.png'
import pinkGalaxy from  '@/public/pinkGalaxy5.png'
import pinkGalaxyMobile from  '@/public/pinkGalaxy5Mobile.png'

// Color image
import leftRed from  "@/public/leftred.png"
import leftGreen from  "@/public/leftgreen.png"
import leftOrange from  "@/public/leftorange.png"
import rightRed from  "@/public/rightred.png"
import rightGreen from  "@/public/rightgreen.png"
import rightOrange from  "@/public/rightorange.png"

export default function DynamicGalaxies(){

    const [windowIsDefined,setWindowIsDefined] = useState(false);
    const [actualScrollPosition, setActualScrollPosition] = useState(0);
    const [remainingHeightToScroll, setRemainingHeightToScroll] = useState(0);
    const [fixedPoint, setFixedPoint] = useState(null);
    const [themeSwitched,setThemeSwitched] = useState("false");
    const [isMobile,setIsMobile] = useState(0);
    const [loading,setLoading] = useState(false);
    const [sizeChanged,setSizeChanged] = useState(false);
    const galaxiesContainer = useRef(null);
    const smallLeftGalaxyMarker = useRef(null);
    const smallLeftBlueGalaxy = useRef(null);
    const smallLeftPbgGalaxy = useRef(null);
    const smallLeftPinkGalaxy = useRef(null);
    const bigRightGalaxyMarker = useRef(null);
    const bigLeftBlueGalaxy = useRef(null);
    const bigLeftPbgGalaxy = useRef(null);
    const bigLeftPinkGalaxy = useRef(null);

    // async function importCssFile(){await import('./DynamicGalaxies.css')}

    function testIsMobile(){
        console.log("test exec")
        if(windowIsDefined){
            if((window.innerWidth > 768) && isMobile){console.log("not mobile");setIsMobile(false)}
            else if(window.innerWidth<=768 && !isMobile) {setIsMobile(true)}
        }
    }

    useEffect(()=>{
        if(window !== "undefined" && !windowIsDefined){            
            // importCssFile();
            setWindowIsDefined(true);
        }else if(windowIsDefined && !loading){
            window.onscroll = ()=>{
                    if(galaxiesContainer.current){
                        galaxiesContainer.current.scrollTop = window.document.children[0].scrollTop;
                        setActualScrollPosition(window.document.children[0].scrollTop);
                    }            

                }
            window.document.addEventListener("switchtheme",()=>{setThemeSwitched(window.localStorage.getItem("light"));});

            if(window.innerWidth>768 && isMobile) setIsMobile(false)
            else if(window.innerWidth<=768 && !isMobile) {setIsMobile(true)}

            window.addEventListener("resize",()=>{
                setSizeChanged(true);
            });
            setLoading(true);
        }else if(loading && windowIsDefined){
            if(actualScrollPosition > (galaxiesContainer.current.scrollHeight - window.innerHeight)){
                
                let localRHTS = 0;
                let localFixedPoint = 0;
                let currentScrollPosition = window.document.children[0].scrollHeight - window.innerHeight - actualScrollPosition;
    
                if(!remainingHeightToScroll) {
                    localRHTS = window.document.children[0].scrollHeight - window.innerHeight - actualScrollPosition;
                    setFixedPoint(actualScrollPosition);
                    setRemainingHeightToScroll(localRHTS);
                }else{
                    localRHTS = remainingHeightToScroll;
                    localFixedPoint = fixedPoint;
                }
                
                if(currentScrollPosition < remainingHeightToScroll/7){
                    smallLeftBlueGalaxy.current.style.opacity = 0;
                    smallLeftPbgGalaxy.current.style.opacity = 0;
                    smallLeftPinkGalaxy.current.style.opacity = 1;
            
                    bigLeftBlueGalaxy.current.style.opacity = 0;
                    bigLeftPbgGalaxy.current.style.opacity = 0;
                    bigLeftPinkGalaxy.current.style.opacity = 1;
                }else if(currentScrollPosition < (remainingHeightToScroll*(2/7))){
                    
                    let l = (currentScrollPosition - (remainingHeightToScroll/7))/(remainingHeightToScroll/7);
                    
                    smallLeftBlueGalaxy.current.style.opacity = 0;
                    smallLeftPbgGalaxy.current.style.opacity = l;
                    smallLeftPinkGalaxy.current.style.opacity = 1;
    
                    bigLeftBlueGalaxy.current.style.opacity = 0;
                    bigLeftPbgGalaxy.current.style.opacity = l;
                    bigLeftPinkGalaxy.current.style.opacity = 1;
                    
    
                }else if(currentScrollPosition < (remainingHeightToScroll*(3/7))){
    
                    let l = (currentScrollPosition - ((2*remainingHeightToScroll)/7))/(remainingHeightToScroll/7);
    
                    smallLeftBlueGalaxy.current.style.opacity = 0;
                    smallLeftPbgGalaxy.current.style.opacity = 1;
                    smallLeftPinkGalaxy.current.style.opacity = 1 - l;
    
                    bigLeftBlueGalaxy.current.style.opacity = 0;
                    bigLeftPbgGalaxy.current.style.opacity = 1;
                    bigLeftPinkGalaxy.current.style.opacity = 1 - l;
                }else if(currentScrollPosition < (remainingHeightToScroll*(4/7))){                
                    smallLeftBlueGalaxy.current.style.opacity = 0;
                    smallLeftPbgGalaxy.current.style.opacity = 1;
                    smallLeftPinkGalaxy.current.style.opacity = 0;
    
                    bigLeftBlueGalaxy.current.style.opacity = 0;
                    bigLeftPbgGalaxy.current.style.opacity = 1;
                    bigLeftPinkGalaxy.current.style.opacity = 0;
                }else if(currentScrollPosition < (remainingHeightToScroll*(5/7))){
    
                    let l = (currentScrollPosition - (remainingHeightToScroll*4/7))/(remainingHeightToScroll/7);
    
                    smallLeftBlueGalaxy.current.style.opacity = l;
                    smallLeftPbgGalaxy.current.style.opacity = 1;
                    smallLeftPinkGalaxy.current.style.opacity = 0;
            
                    bigLeftBlueGalaxy.current.style.opacity = l;
                    bigLeftPbgGalaxy.current.style.opacity = 1;
                    bigLeftPinkGalaxy.current.style.opacity = 0;
                }else if(currentScrollPosition < (remainingHeightToScroll*(6/7))){
    
                    let l = (currentScrollPosition - (remainingHeightToScroll*5/7))/(remainingHeightToScroll/7);
    
                    smallLeftBlueGalaxy.current.style.opacity = 1;
                    smallLeftPbgGalaxy.current.style.opacity = 1-l;
                    smallLeftPinkGalaxy.current.style.opacity = 0;
            
                    bigLeftBlueGalaxy.current.style.opacity = 1;
                    bigLeftPbgGalaxy.current.style.opacity = 1-l;
                    bigLeftPinkGalaxy.current.style.opacity = 0;
                }
                else{                
                    smallLeftBlueGalaxy.current.style.opacity = 1;
                    smallLeftPbgGalaxy.current.style.opacity = 0;
                    smallLeftPinkGalaxy.current.style.opacity = 0;
    
                    bigLeftBlueGalaxy.current.style.opacity = 1;
                    bigLeftPbgGalaxy.current.style.opacity = 0;
                    bigLeftPinkGalaxy.current.style.opacity = 0;
                }
                //Dans ce cas on fait défiler les galaxies fixes
            }else{
                setRemainingHeightToScroll(0);
                if(smallLeftGalaxyMarker.current.getBoundingClientRect().top < (window.innerHeight/-10)) smallLeftBlueGalaxy.current.classList.add("fixed");
                else smallLeftBlueGalaxy.current.classList.remove("fixed");
            }
        }

        if(windowIsDefined && (sizeChanged === true)){
            if((window.innerWidth > 768) && isMobile) {setIsMobile(false)}
            else if(window.innerWidth <= 768 && !isMobile) {setIsMobile(true)}
            setSizeChanged(false);
        }

    },[actualScrollPosition,windowIsDefined,loading,sizeChanged]);

    return (<>
        {windowIsDefined?
        <div className="galaxies_container" ref={galaxiesContainer} id="galaxiesContainer">
            <Image src={(themeSwitched=="true")?leftGreen:(isMobile?mediumPbgGalaxyMobile:mediumPbgGalaxy)} className="smallLeftFixedGalaxy" ref={smallLeftPbgGalaxy} height={isMobile?"200":"900"} width={isMobile?"200":"900"} alt='Small pink blue gold galaxy on left'/>
            <Image src={(themeSwitched=="true")?leftOrange:(isMobile?mediumPinkGalaxyMobile:mediumPinkGalaxy)} className="smallLeftFixedGalaxy" ref={smallLeftPinkGalaxy} alt='Small pink left galaxy'/>
            <div className="bigGalaxies_container">
                <Image src={(themeSwitched=="true")?leftRed:(isMobile?sideGalaxyMobile:sideGalaxy)}  height={isMobile?"200":"900"} width={isMobile?"200":"900"}  data-theme={themeSwitched} className="smallLeftGalaxy" ref={smallLeftBlueGalaxy} id="blueGal" alt='Small blue galaxy on left'/>
                <div className="smallLeftGalaxyMarker" ref={smallLeftGalaxyMarker} id="mark"></div>
                <div ref={bigRightGalaxyMarker} className="bigRightGalaxyMarker"></div>
                <Image src={(themeSwitched=="true")?rightRed:(isMobile?blueGalaxyMobile:blueGalaxy)} ref={bigLeftBlueGalaxy} className="bigRightGalaxy blue" alt='Big blue galaxy on left' height={isMobile?"200":"900"} width={isMobile?"200":"900"} />
                <Image src={(themeSwitched=="true")?rightGreen:isMobile?pbgGalaxyMobile:pbgGalaxy} ref={bigLeftPbgGalaxy} className="bigRightGalaxy fixed" alt='Big pink blue gold galaxy on left' height={isMobile?"200":"900"} width={isMobile?"200":"900"} />
                <Image src={(themeSwitched=="true")?rightOrange:(isMobile?pinkGalaxyMobile:pinkGalaxy)} ref={bigLeftPinkGalaxy} className="bigRightGalaxy fixed" alt='Big pink galaxy on left' height={isMobile?"200":"900"} width={isMobile?"200":"900"} />
            </div>
        </div>:""}
    </>
    )
}