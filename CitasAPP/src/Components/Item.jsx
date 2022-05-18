import React from "react";

const h3 = ({ data, index, borrar, modificar }) => {
      return (
            <div key={index}>
                  <h2>{data.title}</h2>
                  <h3>
                        {data.nombre + " " + data.apellido} <p>{data.date}</p>
                  </h3>
                  <p>{data.actividad}</p>
                  <button onClick={modificar}>modificated</button>
                  <button onClick={borrar}>delete</button>
            </div>
      );
};

export default h3;
