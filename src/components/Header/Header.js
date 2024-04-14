import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import "./Header.css";
import HeaderMenu from './HeaderMenu.js';

import logo from '@/public/logo.png';
import logoBlk from '@/public/logoBlk.png';

export default function Header(){
    return (
        <header>
            <div className="headerLogo_container">
                <Link href="/">
                    <Image className="logo" src={logo} alt="Main logo" width="300" height="auto"/>
                    {/* <Image className="logo darkOnly" src={logo} alt="Main logo" width="300" height="auto"/> */}
                    {/* <Image className="logo lightOnly" src={logoBlk} alt="Main logo" width="300" height="auto"/> */}
                </Link>
            </div>
            <HeaderMenu/>            
        </header>
    )
}