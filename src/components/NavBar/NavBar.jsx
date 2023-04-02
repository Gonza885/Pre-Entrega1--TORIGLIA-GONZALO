import React from "react"
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <header>

            <h1>C R A Z Y |4| M U S C L E</h1>

            <nav>
                <ul>
                    <li>Mancuernas</li>
                    <li>Discos</li>
                    <li>Sogas</li>
                    <li>Barras</li>
                </ul>
            </nav>

            <CartWidget/>

        </header>
    )
}

export default NavBar