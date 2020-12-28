import React from "react";
import '../style.css'
import { Link } from 'react-router-dom'

const Nav =  () =>{
    return(
        <nav className="nav">

    <p>www.DailyNewsPaper.com</p>
            <ul className="navLinks">
                <Link to="/Home">
                    <li> Home </li>
                </Link>
                <Link to="/Buy">
                    <li> Buy  </li>
                </Link>
                <Link to="/About">
                    <li> About </li>
                </Link>
                
            
                
            </ul>
        </nav>
    )
}

export default Nav;