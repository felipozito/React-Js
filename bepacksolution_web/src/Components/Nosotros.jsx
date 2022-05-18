import React from "react";
import img1 from "../Assets/ico_analitic.png";
import img2 from "../Assets/ico_coach.png";
import img3 from "../Assets/ico_recycling.png";
import NosotrosCard from "./NosotrosCard";
import "../Styles/nosotros.css";

const Nosotros = () => {
      return (
            <article id="Nosotros">
                  <div className="nosotros_title">
                        <h2> MISION </h2>
                        <p>
                              Apoyar a nuestros clientes con productos nuevos elaborados con materia prima biodegradable y/o reciclable aportando al
                              cuidado de nuestro planeta.
                        </p>
                  </div>
                  <div className="nosotros_Servicios  shadow">
                        <NosotrosCard
                              title={"Cumplimos Normativas"}
                              img={img1}
                              text={"Respetar nuestras obligaciones contractuales y con el estado."}
                        />
                        <NosotrosCard
                              title={"Ayudamos al Medio Ambiente"}
                              img={img2}
                              text={
                                    "Evaluar los efectos de los productos en el bienestar de las personas a las que van destinados y en el medio ambiente"
                              }
                        />
                        <NosotrosCard
                              title={"Calidad e Innovación"}
                              img={img3}
                              text={
                                    "Nuestras acciones se fundamentan en integridad, honestidad ética e innovación, calidad y pasión por lo que hacemos"
                              }
                        />
                  </div>
                  <div className="nosotros_title">
                        <h2> VISION </h2>
                        <p>
                              Apoyar a nuestros clientes con productos nuevos elaborados con materia prima biodegradable y/o reciclable aportando al
                              cuidado de nuestro planeta.
                        </p>
                  </div>
            </article>
      );
};

export default Nosotros;
