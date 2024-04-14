import React from 'react'
import Header from "@/src/components/Header/Header.js"
import Footer from "@/src/components/Footer/Footer.js"
import './global.css';

export default function RootLayout({ children }) {
    return (
      <html lang="fr">
        <body>
            <Header/>
            <div className="staryBg"></div>
            {children}
            <Footer/>
        </body>
      </html>
    );
  }
  