import React from "react";
import Card from "./Cards";
import "../Css/main.css";
import img1 from "../Assets/palet_ico.svg";
import img2 from "../Assets/apple_ico.svg";
import img3 from "../Assets/ecommer_ico.svg";
import Form from "../Components/Formulario";
const Main = () => {
    return (
        <div className="servicios sombra" id="Servicios">
            <div className="servicios_titulo">
                <h2>Mis Servicios</h2>
            </div>
            <div className="servicios_content_card">
                <Card
                    title="Diseno Web"
                    img={img1}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur qui sint quidem consequuntur odit saepe, quam corporis sed
                    voluptates modi?"
                />
                <Card
                    title="Aplicaciones Web"
                    img={img2}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur qui sint quidem consequuntur odit saepe, quam corporis sed
                    voluptates modi?"
                />
                <Card
                    title="E-Commerce Web"
                    img={img3}
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur qui sint quidem consequuntur odit saepe, quam corporis sed
                    voluptates modi?"
                />
            </div>
            <div className="servicios_contactos_titulo">
                <h2>Contactanos</h2>
            </div>
            <div className="servicios_contactos" id="Contactos">
                <div className="contact_content">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Main;
