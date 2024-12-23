import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Subnav = () => {
    return (
        <nav className='sub_navbar'>
            <ul>
                <p>Organizado por Betomin</p>
                <li>
                    <a target='_blank' href="https://www.instagram.com/betomin._"><img className="img-nav" src='./img/10.png'></img></a>
                </li>
                <li>
                <a target='_blank' href="https://discord.gg/D2hHPu4nuV"><img className="img-nav" src='./img/11.png'></img></a>
                </li>
                <li>
                <a target='_blank' href="https://www.twitch.tv/betomin"><img className="img-nav" src='./img/12.png'></img></a>
                </li>
            </ul>
        </nav>
    )
}

export default Subnav