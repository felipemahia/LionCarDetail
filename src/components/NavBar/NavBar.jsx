import "./navbar.css"
import {  } from "react-router-dom";

function NavBar () {
    return (
        <nav className="flex navbar">
            <div className="nombretienda">
                Lion logo
            </div>
        <ul className="flex">
        
            <li>
                Home
            </li>
            <li>
                Servicios
            </li>
            <li>
                Turnos
            </li>
            <li>
                Contacto
            </li>
        </ul>
        </nav>
        
    )
}

export default NavBar