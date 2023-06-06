import React, { useEffect } from 'react';
import './about.css'
import workersUp from "../../assets/empresarios-up.jpg"
import workersDown from "../../assets/empresarios-down.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='about container section'>
            <div className="sectionContainer grid">
                <div className="imageContainer grid">
                    <div data-aos="fade-right" data-aos-duration="2500" className="imgDiv">
                        <img src={workersUp} />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="imgDiv">
                        <img src={workersDown} />
                    </div>
                </div>  
                <div className="textDiv grid">
                    <div className="tittleDiv flex">
                        <h2 data-aos="fade-left" data-aos-duration="2500">Acerca de nosotros</h2>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="singleGrid">
                        <p>
                            En nuestra empresa, ofrecemos servicios de consultoría en tecnología de información de alta calidad para ayudar a nuestros clientes a alcanzar sus objetivos de negocio. Nos especializamos en una amplia gama de servicios de tecnología de información, desde la consultoría estratégica hasta el diseño y la implementación de soluciones tecnológicas personalizadas.
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="singleGrid">
                        <p>
                            Nuestro equipo está compuesto por expertos en tecnología de información altamente capacitados y experimentados que están dedicados a brindar soluciones innovadoras y eficientes a nuestros clientes. Nuestra empresa tiene una amplia experiencia en una variedad de industrias, lo que nos permite brindar soluciones personalizadas a cada uno de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;