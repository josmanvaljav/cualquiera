import React, { useEffect } from 'react';
import './footer.css'
import logoTwo from '../../assets/logo-two.png';
import {TiSocialFacebook} from "react-icons/ti";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='footer'>
            <div className="sectionContainer grid">
                <div data-aos="fade-up" data-aos-duration="2500" className="gridOne">
                    <div className="logoDiv">
                        <img src={logoTwo} className="logo" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="footerText">
                    <p><b>Callua Digital</b>, empresa consultora en tecnología de información se dedica a brindar soluciones personalizadas y escalables a nuestros clientes para ayudarlos a alcanzar sus objetivos de negocio. Contáctenos hoy para obtener más información sobre cómo podemos ayudarlo a usted y a su empresa a tener éxito en el mundo de la tecnología de la información.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
                    <span className="linkTitle">Enlaces</span>
                    <Link to="/">
                        <li>
                            <a href="">Inicio</a>
                        </li>
                    </Link>
                    <Link to="/nosotros">
                        <li>
                            <a href="">Nosotros</a>
                        </li>
                    </Link>
                    <Link to="/servicios">
                        <li>
                            <a href="">Servicios</a>
                        </li>
                    </Link>
                    <Link to="/sectores">
                        <li>
                            <a href="">Sectores</a>
                        </li>
                    </Link>
                    <Link to="/contacto">
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="socialNetwork">
                    <span className="linkTitle">Redes Sociales</span>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <FaPinterestP className='icon'/>
                    </div>
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Diseñado | Desarrollado por Callua Digital</p>
            </div>
        </div>
    );
};

export default Footer;