import React from 'react'
import Header from "@/src/components/Header/Header.js"
import Footer from "@/src/components/Footer/Footer.js"
import PreloadResources  from './preload-ressource.js'
import { Raleway } from "next/font/google";
const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Bintou Fofana",
  description: "Bonjour, je suis une développeuse web expérimentée. Je fais des sites vitrines, des portfolios, des sites e-commerces. Je vous assiste aussi pour la maintenance de vos sites web. Je suis expérimentée de 4 ans et cette expérience me permettra de vous offrir un service rapide et efficace."
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
  