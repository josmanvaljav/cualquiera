import React, { useState } from 'react';
import './navbar.css'
import { CgMenuGridO } from "react-icons/cg"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState("navBarMenu");

    const showNavBar = () => {
        setActive("navBarMenu showNavBar");
    };
    const removeNavBar = () => {
        setActive("navBarMenu");
    };

    const [addBg, setAddBg] = useState("navBarTwo flex");
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            setAddBg("navBarTwo flex navBarWithBg");
        } else {
            setAddBg("navBarTwo flex");
        }
    };

    window.addEventListener("scroll", addBgColor);

    return (
        <div className='navBar flex'>
            <div className={addBg}>
                <div className="logoDiv">
                    <img src={logo} className="logo"/>
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <Link to='/'>
                            <li className="listItem" onClick={removeNavBar}>Inicio</li>
                        </Link>
                        <Link to='/nosotros'>
                            <li className="listItem" onClick={removeNavBar}>Nosotros</li>
                        </Link>
                        <Link to='/servicios'>
                            <li className="listItem" onClick={removeNavBar}>Servicios</li>
                        </Link>
                        <Link to='/sectores'>
                            <li className="listItem" onClick={removeNavBar}>Sectores</li>
                        </Link>
                    </ul>
                    <Link to='/contacto'>
                        <button className="btn flex btnOne" onClick={removeNavBar}>Contacto</button>
                    </Link>
                </div>
                <Link to='/contacto'>
                    <button className="btn flex btnTwo">Contacto</button>
                </Link>
                <div className="toggleIcon" onClick={showNavBar}>
                    <CgMenuGridO className='icon'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;