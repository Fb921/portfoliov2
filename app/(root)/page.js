import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import MainEarthImage from '@/src/components/MainEarthImage/MainEarthImage.js';
import ImageTooltip from '@/src/components/ImageTooltip/ImageTooltip.js';

//Mini presentation logos
import jsLogo from '@/public/js-logo.png'
import jsLogo3 from '@/public/jsWhiteLogo.png'
import reactLogo from '@/public/react-logo.png'
import nextLogo from '@/public/next-logo.png'
import phpLogo from '@/public/phpLogo.png'
import wordpressLogo from '@/public/wordpress-logo.png'

import nodeLogo from '@/public/nodeLogo.png'
import gitLogo from '@/public/gitLogo.png'
import jqueryLogo from '@/public/jqueryLogo.png'
import sqlLogo from '@/public/sqlLogo.png'
import bootstrapLogo from '@/public/bootstrapLogo.png'
import reactWhiteLogo from "@/public/reactWhiteLogo.png"
import loupe from "@/public/loupe.png"
import creative from "@/public/creative.png"
import exp from "@/public/exp.png"
import whiteHtmlLogo from '@/public/whiteHTML2.png'
import whiteCSSLogo from '@/public/whiteCss2.png'
import phpLogo3 from '@/public/phpLogo3.png'
import nodeLogo3 from '@/public/nodeLogo3.png'

import colorBootstrapLogo from "@/public/colorBootstrapLogo.png"
import colorJqueryLogo from "@/public/colorJqueryLogo.png"
import colorGitLogo from "@/public/colorGitLogo.png"
import colorSqlLogo from "@/public/colorSqlLogo.png"
import colorReactLogo from '@/public/colorReactLogo.png'
import colorWpLogo from '@/public/colorWpLogo.png'
import colorNodeLogo from '@/public/colorNodeLogo.png'
import colorNextLogo from '@/public/colorNextLogo.png'
import colorJSLogo from '@/public/colorJSLogo.png'
import colorPhpLogo from '@/public/colorPhpLogo.png'
import colorHtmlLogo from '@/public/colorHTML.png'
import colorCSSLogo from '@/public/colorCss.png'

import femaleSign from "@/public/femaleSign.png";

//Composants
import DynamicGalaxies from '@/src/components/DynamicGalaxies/DynamicGalaxies';
import ContactPopup from '@/src/components/ContactPopup/ContactPopup.js';
import ServicesTab from '@/src/components/servicesTab/ServicesTab.js';

import ImportCSS from './ImportCSS';

export default function Page(){
    return (
        <main>
            <ImportCSS/>
            <ContactPopup/>
            <DynamicGalaxies/>

            <section className={styles.section1}>
                <div>
                    <h1>Concrétisons ensemble le projet qui vous ressemble</h1>
                    <div className="gray">Marquez votre présence sur le web</div>
                    <div>
                        <a href="#servicesSection" className={styles.default_btn}>Voir mes Services</a>
                    </div>
                    <div className={styles.miniPresentation}>
                        <div className="gray">Bintou - Développeuse web</div>
                        <div className={styles.shortLogoPresentation}>
                            <Image src={jsLogo3} alt="Logo JS" className="invertLight"/>
                            <Image src={reactWhiteLogo} alt="Logo React" className="invertLight"/>
                            <Image src={colorNextLogo} alt="Logo Next" className="invertLight"/>
                            <Image src={nodeLogo3} alt="Logo Node" className="invertLight"/>
                            <Image src={phpLogo3} alt="Logo PHP" className="invertLight"/>
                            <Image src={colorWpLogo} alt="Logo Wordpress" className="invertLight"/>
                        </div>
                        <div><a className={styles.knowMore_link + " know_more"} href="#allLangagesSection">En savoir plus sur les langages/technologies &#62;</a></div>
                    </div>            
                </div>
                <MainEarthImage/>
            </section>            
            <section className={styles.section2} id="quiSuisJeSection">
                <div>
                    <h2 className={styles.quiSuisJe_title}>Qui suis-je ?</h2>
                    <h3 className={styles.quiSuisjeName_container }>
                        <Image className={styles.femaleSign} src={femaleSign} alt="Image signe féminin"/>
                        <span>Bintou</span>, 24 ans
                    </h3>
                    <p className={styles.tags_container}>
                        <span className={styles.tag + " grayBg tag"}>Développeuse web expérimentée</span>
                        <span className={styles.tag + " grayBg tag"}>{"Conceptrice d'application web"}</span>
                        <span className={styles.tag + " grayBg tag"}>Développeuse web Wordpress</span>
                        <span className={styles.tag + " grayBg tag"}>Développeuse front-end</span>
                        <span className={styles.tag + " grayBg tag"}>Développeuse back-end</span>
                    </p>
                    <div><div><a href="#servicesSection" className={styles.default_btn}>Voir mes Services</a></div></div>
                </div>
                <div className={styles.whyMe_container}>
                    <h3>Pourquoi moi ?</h3>
                    <p className="max800 gray">{"Développeuse archarnée du travail, mon but est de transformer votre projet en réalité. Pour ce faire, je mettrai à votre disposition l'ensemble de mes compétences et qualités."}</p>
                    <div className={styles.mini_title + ' mini-title_container'}><Image src={loupe} alt="Image loupe : Développeuse attentive et minutieuse" className={styles.mini_img + ' invertLight'}/>Attentive et minutieuse</div>
                    <p className="max800 gray">De nature attentive, je saurai être à votre écoute afin de fidèlement répondre à chacune de vos attentes. Aussi, mon sens du détail me permettra de parfaire le résultat final.</p>
                    <div className={styles.mini_title + ' mini-title_container'}>
                        <Image src={exp} alt="Image pouce : développeuse expérimentée" className={styles.mini_img + ' invertLight'}/>
                        Expérimentée
                    </div>
                    <p className="max800 gray">Mon expérience permettra de répondre à votre demande dans les plus brefs délais et cela tout en fournissant un service de qualité.</p>
                    <div className={styles.mini_title + ' mini-title_container'}><Image src={creative} alt="Image crayon : Développeuse créative" className={styles.mini_img + ' invertLight'}/>Créative</div>
                    <p className="max800 gray">Sur le plan technique, ma créativité me permettra de trouver une solution au plus grand nombre de problèmes et donc de répondre à votre demande du mieux possible.</p>
                </div>
                <div id="allLangagesSection">
                    <h3 className={styles.allLanguage_title}>Les langages et technologies maîtrisés</h3>
                    <div className={styles.logo_container + " " +   styles.first}>
                        <div>
                            <ImageTooltip image1={colorHtmlLogo} image2={whiteHtmlLogo} info="Incontournable du développement web, HTML est le langage permettant de structurer une page web. Il est requis lors de la création d'un site web et permet de définir son contenu et la façon dont il est disposé." title="HTML"/>
                        </div>
                        <div>
                            <ImageTooltip  image1={colorCSSLogo} image2={whiteCSSLogo} info="Css est le langage permettant de donner un style à un site web. En effet il permet de définir la couleur des éléments, leur taille, etc." title="CSS"/>
                        </div>
                        <div>
                            <ImageTooltip image1={colorJSLogo} image2={jsLogo} info="Indispensable pour les développeurs, ce langage permet de rendre dynamique un site web. En effet, il permet non seulement d'interragir avec les visiteurs du site mais également de créer des animations qui rendent l'expérience utilisateur plus agréable." title="JavaScript"/>
                        </div>
                        <div>
                            <ImageTooltip image1={colorReactLogo} image2={reactLogo} info="React est une bibliothèque basée sur le langage javaScript. Elle offre une multitude de fonctionnalités et permet aux développeurs de créer des applications web optimales et durables dans le temps." title="React"/>
                        </div>
                        <div>
                            <ImageTooltip invertLight={true} image1={colorNextLogo} image2={nextLogo} info="Next est un framework* basé sur la bibliothèque* React. Contrairement à React il permet la conception complète d'un site web." title="Next"/>
                        </div>
                        <div>
                            <ImageTooltip image1={colorNodeLogo} image2={nodeLogo} info="Node est un environnement d'exécution* permettant de créer des applications performantes." title="Node"/>
                        </div>
                    </div>
                    <div className={styles.logo_container}>
                        <div>
                            <ImageTooltip image1={colorPhpLogo} image2={phpLogo} info="PHP est un langage exécuté par les serveurs web (contrairement à JavaScript qui est exécuté sur le navigateur). L'une de ses fonctionnalités la plus intéressante est qu'il permet de récupérer et traiter les données stockées dans la base de données." title="PHP"/>
                        </div>
                        <div>
                            <ImageTooltip invertLight={true} image1={colorWpLogo} image2={wordpressLogo} info="Wordpress est un CMS* permettant de créer un site web facilement sans avoir besoin de coder. Ses nombreuses extensions permettent de couvrir le plus grand nombre de besoins." title="Wordpress"/>
                        </div>
                        <div>
                            <ImageTooltip image1={colorJqueryLogo} image2={jqueryLogo} info="JQuery est une bibliothèque basée sur le langage javaScript, qui permet aux développeur de faciliter l'écriture de leur code. Si bien utilisée, elle permet un gain de temps considérable pour la création d'une application web." title="JQuery"/>
                        </div>
                        <div>
                            <ImageTooltip image1={colorBootstrapLogo} image2={bootstrapLogo} info="Bootstrap est une bibliothèque HTML, CSS et JavaScript permettant de faciliter la mise en style de son site web. Elle permet notamment de créer aisément des design responsive* et de qualité." title="Bootstrap"/>
                        </div>
                        <div>
                            <ImageTooltip image1={colorSqlLogo} image2={sqlLogo} info="Langage permettant de questionner la base de données afin d'en extraire les données qui nous intérressent." title="MySQL"/>
                        </div>
                        <div>
                            <ImageTooltip invertLight={true} image1={colorGitLogo} image2={gitLogo} info="Github est un service permettant d'héberger son code. Il permet de versionner son code afin de garder une trace de chacune de ces étapes." title="Github"/>
                        </div>
                    </div>
                    <div className={styles.miniInfos_container}>
                        <span className={styles.infos_icon + " grayBg"}>i</span>
                        <span className="gray">Cliquez sur les icônes pour en savoir plus pour chaque langage</span>
                    </div>
                </div>
            </section>

            <section className={styles.section3} id="servicesSection">
                <h2>Mes services</h2>
                <ServicesTab/>
            </section>
        </main>
    )
}