'use client'
import ReactDOM from 'react-dom';

export default function PreloadResources() {

    ReactDOM.preload("/_next/image?url=%2FearthGalaxy3Mobile.png&w=3840&q=75",{as:"image", type:"image/png"});
    
    // ReactDOM.preload("/_next/image?url=%2FearthGalaxy3.png&w=1200&q=75", {as:"image", type:"image/png", imageSrcSet:"/_next/image?url=%2FearthGalaxy3.png&w=1200&q=75", imagesizes:"200px"});
    
    // ReactDOM.preload("/_next/image?url=%2FearthGalaxy3.png&w=1200&q=75",{as:"image", type:"image/png", imagesrcset:"/earthGalaxy3Mobile.png"});


    // ReactDOM.preload("/earthGalaxy3Mobile.png",{as:"image", type:"image/png"});
    
    // if((typeof window !== "undefined") && (window.innerWidth < 768)){
    //     // ReactDOM.preload("/earthGalaxy3Mobile.png",{as:"image", type:"image/png"});
        
    //     //Initial
    //     ReactDOM.preload("/_next/image?url=%2FearthGalaxy3Mobile.png&w=3840&q=75",{as:"image", type:"image/png"});
    // }else{
    //     ReactDOM.preload("/_next/image?url=%2FearthGalaxy3.png&w=3840&q=75",{as:"image", type:"image/png"});
    //     // ReactDOM.preload("/_next/image?url=%2FearthGalaxy3.png&w=3840&q=75",{as:"image", type:"image/png"});
    //     // ReactDOM.preload("/earthGalaxy3Mobile.png",{as:"image", type:"image/png"});

    // }

    // ReactDOM.preload("/_next/static/media/earthGalaxy3.9e4785e6.png",{as:"image", type:"image/png"});
    // ReactDOM.preload("/_next/image?url=%2FearthGalaxy3Mobile.png&w=3840&q=75",{as:"image", type:"image/png"});
    // ReactDOM.preload("/earthGalaxy3.png",{as:"image", type:"image/png"});
    // ReactDOM.preload("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FearthGalaxy3.9e4785e6.png&w=3840&q=75",{as:"image", type:"image/png"});
    // ReactDOM.preload("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FearthGalaxy3.9e4785e6.png&w=3840&q=75",{as:"image", type:"image/png"});
    return null;
}