'use client'
import ReactDOM from 'react-dom';
export default function PreloadResources() {
    ReactDOM.preload("/_next/image?url=%2FearthGalaxy3Mobile.png&w=640&q=75",{as:"image", type:"image/png"});
    return null;
}