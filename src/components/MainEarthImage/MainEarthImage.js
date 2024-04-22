"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import './MainEarthImage.css';
import earthGalaxy from '@/public/earthGalaxy3.png';
import earthGalaxy3Mobile from '@/public/earthGalaxy3Mobile.png';
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
        <Image src={isMobile?"/earthGalaxy3Mobile.png":"/earthGalaxy3.png"} alt="Image Terre" className="darkOnly" loading="eager" height={isMobile?"200":"1100"} width={isMobile?"200":"1300"}/>

        {/* <Image src={"/earthGalaxy3.png"} srcset={"/earthGalaxy3Mobile.png"} alt="Image Terre" className="darkOnly" loading="eager" height={isMobile?"200":"1100"} width={isMobile?"200":"1100"}/> */}
        {/* <Image src={"/earthGalaxy3.png"} srcSet={"/earthGalaxy3Mobile.png"} alt="Image Terre" className="darkOnly" loading="eager" height="1300" width="1100"/> */}
        <Image src={earthGalaxyLight} alt="Image Terre" className="lightOnly" height={isMobile?"200":"1100"} width={isMobile?"200":"1100"}/>
    </div>)
}