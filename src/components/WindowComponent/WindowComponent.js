"use client"
import React, {useState,useEffect} from 'react'

export default function WindowComponent(){
    const [windowIsDefined,setWindowIsDefined] = useState(false);
    const [windowWidth,setWindowWidth] = useState(0);
    const [windowHeight,setWindowHeight] = useState(0);
    useEffect(()=>{
        if(typeof window !== "undefined" && !windowIsDefined){
            window.windowWidth;
        }
    })
    return (
        <div>
            
        </div>
    )
}