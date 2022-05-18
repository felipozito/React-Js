import React from "react";

const CardAbout = (props) => {
      return (
            <div className="timeline-panel">
                  <div className="timeline-heading">
                        <h4>{props.date}</h4>
                        <h4 className="subheading">{props.title}</h4>
                  </div>
                  <div className="timeline-body">
                        <p className="text-muted">{props.description}</p>
                  </div>
            </div>
      );
};

export default CardAbout;
