import React, { useEffect } from 'react';
import './sector.css'
import { AiFillBank } from "react-icons/ai"
import { BiStoreAlt } from "react-icons/bi"
import { BsFillHeartPulseFill } from "react-icons/bs"
import { MdMenuBook, MdPrecisionManufacturing, MdSettingsInputAntenna, MdOutlineEmojiTransportation, MdOutlineTransferWithinAStation } from "react-icons/md"

import Aos from "aos";
import "aos/dist/aos.css";

const Sector = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='sector container section'>
            <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="description">
                    <h2 data-aos="fade-down" data-aos-duration="2500">Sectores</h2>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <p>
                            Callua Digital ha participado de proyectos en los siguientes sectores.
                        </p>
                    </div>
                </div>
                <div className="searchInputs grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <AiFillBank className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Banca</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <BiStoreAlt className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Retail</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <BsFillHeartPulseFill className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Salud</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <MdMenuBook className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Educación</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <MdPrecisionManufacturing className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Manufactura</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <MdSettingsInputAntenna className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Telecomunicaciones</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <MdOutlineEmojiTransportation className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Sector Público</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <MdOutlineTransferWithinAStation className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Servicios</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sector;