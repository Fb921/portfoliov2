"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import './MainEarthImage.css';
import earthGalaxy from '@/public/earthGalaxy3.png';
import earthGalaxyLight from '@/public/earthCreative2.png';

export default function MainEarthImage(){
    
    const [windowIsDefined,setWindowIsDefined] = useState(false);
    const [isMobile,setIsMobile] = useState(true);

    useEffect(()=>{
        if(window !== "undefined" && (windowIsDefined === false)){

            if(window.innerWidth > 768) setIsMobile(false)
            else if(window.innerWidth <= 768) {setIsMobile(true)}

            window.addEventListener("resize",()=>{
                if(window.innerWidth > 768 ) setIsMobile(false)
                else if(window.innerWidth <= 768) {setIsMobile(true)}
            });
            
            setWindowIsDefined(true);
        }
    },[isMobile]);

    return(<div className="mainEarthImage">
        <Image src={isMobile?"/earthGalaxy3Mobile.png":earthGalaxy} alt="Image Terre" className="darkOnly" loading="eager" height={isMobile?"200":"1100"} width={isMobile?"200":"1100"}/>
        <Image src={earthGalaxyLight} alt="Image Terre" className="lightOnly" height={isMobile?"200":"1100"} width={isMobile?"200":"1100"}/>
    </div>)
}