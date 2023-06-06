import React, { useEffect } from 'react';
import './home.css'
import image_front from "../../assets/ciudad-inteligente.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='home'>
            <div data-aos="fade-up" data-aos-duration="2500" className="homeImages flex">
                <img src={image_front} className="imageFront" />
            </div>
            <div className="mainText">
                <h4 data-aos="fade-left" data-aos-duration="2500">INNOVAMOS CONTIGO</h4>
                <h1 data-aos="fade-left" data-aos-duration="2500">La Consultora de Tecnología que Transformará tu Empresa</h1>
            </div>
        </div>
    );
};

export default Home;