import React from "react";

const Card = ({ title, text, img }) => {
    return (
        <div className="servicios_card">
            <div className="card_titulo">
                <h3>{title}</h3>
            </div>
            <div className="card_icono">
                <img src={img} alt="palet" />
            </div>
            <div className="card_info">
                <p>{text} </p>
            </div>
        </div>
    );
};

export default Card;
