import React from "react";

const Card = (props) => {
      return (
            <div className="row">
                  <i className={props.ico}></i>
                  <h3>{props.title}</h3>
                  <p>{props.text}</p>
            </div>
      );
};

export default Card;
