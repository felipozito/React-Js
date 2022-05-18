import React from "react";

const NosotrosCard = (props) => {
      return (
            <div className="Nosotros_Servicios_card shadow">
                  <div className="servicios_card_title">
                        <h2>{props.title}</h2>
                  </div>
                  <div className="servicios_card_image">
                        <img src={props.img} alt="#" />
                  </div>
                  <div className="servicios_card_text">
                        <p>{props.text}</p>
                  </div>
            </div>
      );
};

export default NosotrosCard;
