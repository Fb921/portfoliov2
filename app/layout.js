import { Raleway } from "next/font/google";
import "./globals.css"

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Bintou Fofana",
  description: "Bienvenue sur mon portfolio qui je l'espère vous permettra d'en savoir plus àmon sujet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* inter ... génère une erreur */}
      <body className={inter.className}>
        <div></div>
        {children}
      </body>
    </html>
  );
}
