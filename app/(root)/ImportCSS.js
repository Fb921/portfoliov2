"use client"

import React,{useState,useEffect} from 'react';

export default function ImportCSS(){
    const [windowIsDefined,setWindowIsDefined] = useState(false);

    async function importCssFile(){
        const Fuse = (await import('./global.css'));
    }
    useEffect(()=>{
        if(typeof window !== "undefined" && !windowIsDefined){
            setWindowIsDefined(true);
            importCssFile();
        }
    },[windowIsDefined])
    return (<></>);
}