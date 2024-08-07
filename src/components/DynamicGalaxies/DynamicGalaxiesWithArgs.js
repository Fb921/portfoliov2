"use client"
import React, {useState, useEffect,useRef} from 'react';
import Image from 'next/image';

import './DynamicGalaxies.css';

import sideGalaxy from '@/public/sideGalaxy.png'
import mediumPbgGalaxy from  '@/public/smallBluePinkGalaxy.png'
import mediumPinkGalaxy from  '@/public/smallPinkGalaxy.png'
import blueGalaxy from  '@/public/blueGalaxy5.png'
import pbgGalaxy from  '@/public/bluePinkGalaxy5.png'
import pinkGalaxy from  '@/public/pinkGalaxy5.png'

export default function DynamicGalaxies({windowW}){

    const [windowIsDefined,setWindowIsDefined] = useState(false);
    const [actualScrollPosition, setActualScrollPosition] = useState(0);
    const [remainingHeightToScroll, setRemainingHeightToScroll] = useState(0);
    const [fixedPoint, setFixedPoint] = useState(null);
    // const [galaxiesContainerScrollPosition, setGalaxiesContainerScrollPosition] = useState(0);

    const galaxiesContainer = useRef(null);

    const smallLeftGalaxyMarker = useRef(null);
    const smallLeftBlueGalaxy = useRef(null);
    const smallLeftPbgGalaxy = useRef(null);
    const smallLeftPinkGalaxy = useRef(null);

    const bigRightGalaxyMarker = useRef(null);
    const bigLeftBlueGalaxy = useRef(null);
    const bigLeftPbgGalaxy = useRef(null);
    const bigLeftPinkGalaxy = useRef(null);
    

    useEffect(()=>{
        
        if(galaxiesContainer){
            if(window !== "undefined" && !windowIsDefined){
                window.onscroll = ()=>{
                    galaxiesContainer.current.scrollTop = window.document.children[0].scrollTop;
                    setActualScrollPosition(window.document.children[0].scrollTop);
                }
                setWindowIsDefined(true);
            }
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
                if(smallLeftGalaxyMarker.current.getBoundingClientRect().top < (window.innerHeight/-10)){
                    smallLeftBlueGalaxy.current.classList.add("fixed");
                }else{
                    smallLeftBlueGalaxy.current.classList.remove("fixed");
                }
                
        }
        }

    },[actualScrollPosition,windowIsDefined, windowW,galaxiesContainer])

    return (
        <div className="galaxies_container" ref={galaxiesContainer} id="galaxiesContainer">
            <Image src={mediumPbgGalaxy} className="smallLeftFixedGalaxy" ref={smallLeftPbgGalaxy} height="50vw" width="50vw" alt='Small pink blue gold galaxy on left'/>
            <Image src={mediumPinkGalaxy} className="smallLeftFixedGalaxy" ref={smallLeftPinkGalaxy} alt='Small pink left galaxy'/>

            
            <div className="bigGalaxies_container">
                <Image src={sideGalaxy} className="smallLeftGalaxy" ref={smallLeftBlueGalaxy} id="blueGal" alt='Small blue galaxy on left'/>
                <div className="smallLeftGalaxyMarker" ref={smallLeftGalaxyMarker} id="mark"></div>
                <div ref={bigRightGalaxyMarker} className="bigRightGalaxyMarker"></div>
                <Image src={blueGalaxy} ref={bigLeftBlueGalaxy} className="bigRightGalaxy blue" alt='Big blue galaxy on left'/>
                <Image src={pbgGalaxy} ref={bigLeftPbgGalaxy} className="bigRightGalaxy fixed" alt='Big pink blue gold galaxy on left'/>
                <Image src={pinkGalaxy} ref={bigLeftPinkGalaxy} className="bigRightGalaxy fixed" alt='Big pink galaxy on left'/>
            </div>
        </div>
    )
}