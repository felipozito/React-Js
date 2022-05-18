import React, { useRef } from "react";
import img1 from "../Assets/header1.jpg";
import img2 from "../Assets/header2.jpg";
import img3 from "../Assets/header3.jpg";
import img4 from "../Assets/header4.jpg";
import "../Styles/main.css";

const Main = () => {
      const images = [img1, img2, img3, img4];

      const carousel = useRef();

      const animacion = () => {
            let i = 0;
            const slider = carousel.current;
            setInterval(() => {
                  slider.StyleHTMLAttributes.backgroundImage = `url(${images[i]})`;
                  slider.StyleHTMLAttributes.transition = ` all ease-in 0.5s`;

                  i >= 3 ? (i = 0) : i++;
            }, 5000);
      };
      animacion();

      return (
            <main className="header" id="Inicio">
                  <div className="slideshow-container">
                        <div className="mySlides" ref={carousel}>
                              {/* <img src={images[slideIndex]} alt="img" /> */}
                        </div>
                  </div>
                  <div className="slide_text">
                        <h2>BEPACK SOLUTION</h2>
                        <hr className="separator" />
                        <h4>Opta por ideas renovables, genera grandes cambios para la vida y el planeta</h4>
                        <a href="#Contactos" className="slide_text_btn">
                              CONTACTANOS
                        </a>
                  </div>
                  <div className="dots" style={{ textAlign: "center" }}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                  </div>
            </main>
      );
};

export default Main;
