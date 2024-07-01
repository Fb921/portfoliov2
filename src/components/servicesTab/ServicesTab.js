import React from 'react';
import Image from 'next/image'
import "./ServicesTab.css"

export default function ServicesTab(){

    return(
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Wordpress</th>
                        <th>React</th>
                        <th>JavaScript Core</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Site Vitrine ou Portfolio</td>
                        <td>Oui</td>
                        <td>Oui</td>
                        <td>Oui</td>
                    </tr>
                    <tr>
                        <td>Boutique e-commerce</td>
                        <td>Oui</td>
                        <td>Non</td>
                        <td>Non</td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                        <td>Oui</td>
                        <td>Non</td>
                        <td>Non</td>
                    </tr>
                    <tr>
                        <td>Application web optimisée (modification d'une application déjà existante ou création d'une nouvelle application)</td>
                        <td>Non</td>
                        <td>Oui</td>
                        <td>Oui</td>
                    </tr>
                    <tr>
                    <td>Maintenance</td>
                        <td>Oui</td>
                        <td>Oui</td>
                        <td>Oui</td>
                    </tr>
                    <tr>
                        <td>Débogage</td>
                        <td>Oui</td>
                        <td>Oui</td>
                        <td>Oui</td>
                    </tr>
                    <tr>
                        <td>Hébergement</td>
                        <td>Oui</td>
                        <td>Oui</td>
                        <td>Oui</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}