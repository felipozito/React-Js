import React from "react";
import location from "../Assets/location_ico.svg";
import "../Css/hero.css";

const hero = () => {
    return (
        <div className="header" id="Nosotros">
            <div className="header_fondo">
                <h1>Diseno y Desarrollo Web</h1>
                <p>
                    <img src={location} alt="" />
                    Quito , Ecuador{" "}
                </p>
                <a href="#Contactos">Contactanos</a>
            </div>
        </div>
    );
};

export default hero;
