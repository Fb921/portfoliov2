import React from 'react'
import Header from "@/src/components/Header/Header.js"
import Footer from "@/src/components/Footer/Footer.js"
import PreloadResources  from './preload-ressource.js'
import { Raleway } from "next/font/google";
const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Bintou Fofan",
  description: "Bienvenue sur mon portfolio qui je l'espère vous permettra d'en savoir plus à mon sujet."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <PreloadResources/>
      <body className={inter.className}>
          <Header/>
          <div className="staryBg"></div>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
  