import React from "react";

const CardProjects = (props) => {
      return (
            <div className="box">
                  <img src={props.img} alt="web1" />
                  <p>{props.text}</p>
                  <h5>{props.title}</h5>
            </div>
      );
};

export default CardProjects;
