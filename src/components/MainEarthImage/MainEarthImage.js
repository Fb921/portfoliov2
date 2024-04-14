"use client"

import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import './MainEarthImage.css';
import '@/app/(root)/global.css';

import earthGalaxy from '@/public/earthGalaxy3.png';
// import earthGalaxyLight from '@/public/earthLight2.png';
import earthGalaxyLight from '@/public/earthCreative2.png';


export default function MainEarthImage(){
    return(<div className="mainEarthImage">
        <Image src={earthGalaxy} alt="Image Terre" className="darkOnly"/>
        <Image src={earthGalaxyLight} alt="Image Terre" className="lightOnly"/>
    </div>)
}