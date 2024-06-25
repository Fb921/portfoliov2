"use client"

import React,{useState,useEffect} from 'react';

export default function ImportCSS(){
    const [windowIsDefined,setWindowIsDefined] = useState(false);

    async function importCssFile(){
        const Fuse = (await import('./global.css'));
    }
    useEffect(()=>{
        if(typeof window !== "undefined" && !windowIsDefined){

            console.log("frist check");
            console.log(window.localStorage.getItem("isNoticed"));
            setWindowIsDefined(window.localStorage.getItem("isNoticed"));
            importCssFile();
        }
    },[windowIsDefined])
    return (<></>);
}