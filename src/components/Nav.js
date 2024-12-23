import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/"><img className="img-nav" src='./img/icon-nav.png'></img></Link>
                </li>
                <li>
                    <Link to="/elo">Estadísticas de SoloQ</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav