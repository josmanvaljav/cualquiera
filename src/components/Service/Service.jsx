import React, { useEffect } from 'react';
import './service.css'
import desarrolloSoftware from "../../assets/desarrollo-software.jpg"
import consultoria from "../../assets/consultoria.jpg"
import gestionProyectos from "../../assets/gestion-proyectos.jpg"
import dataScience from "../../assets/data-science.jpg"
import realidadVirtual from "../../assets/realidad-virtual.jpg"
import disenioGrafico from "../../assets/disenio-grafico.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='service section'>
            <div className="infoContainer container">
                <div className="textDiv">
                    <div className="tittleDiv flex">
                        <h2 data-aos="fade-up" data-aos-duration="2500">Servicios</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2500" className="singleText">
                        <p>
                        Nos enfocamos en brindar soluciones que sean escalables, flexibles y que puedan crecer junto con nuestros clientes. Nos esforzamos por garantizar que nuestros clientes reciban soluciones personalizadas y eficientes que sean adaptables a las necesidades cambiantes del mercado.
                        </p>
                    </div>
                </div>
                <div className="cardsDiv grid">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={desarrolloSoftware} className='icon' />
                        </div>
                        <span className="cardTittle">Desarrollo de Software</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={consultoria} className='icon' />
                        </div>
                        <span className="cardTittle">Consultoría Informática</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={gestionProyectos} className='icon' />
                        </div>
                        <span className="cardTittle">Gestión de Proyectos</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={dataScience} className='icon' />
                        </div>
                        <span className="cardTittle">Data Science</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={realidadVirtual} className='icon' />
                        </div>
                        <span className="cardTittle">Tecnología Alternativa</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={disenioGrafico} className='icon' />
                        </div>
                        <span className="cardTittle">Diseño Gráfico</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;