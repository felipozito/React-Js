import React from "react";
import "../Styles/footer.css";
import logowp from "../Assets/wp.svg";
import logofb from "../Assets/fb.svg";
import logo from "../Assets/logo192.png";

const Footer = () => {
      return (
            <footer id="Contactos">
                  <div className="contactos">
                        <div className="card_footer">
                              <div className="card_footer_logo">
                                    <img src={logowp} alt="wp" />
                              </div>
                              <div className="card_footer_title">
                                    <h2>Whatsapp</h2>
                                    <p>Llamanos o Escribenos</p>
                              </div>
                              <a href="3" className="btn_footer">
                                    ESCRIBENOS
                              </a>
                        </div>
                        <div className="card_footer">
                              <div className="card_footer_logo">
                                    <img src={logofb} alt="fb" />
                              </div>
                              <div className="card_footer_title">
                                    <h2>Facebook</h2>
                                    <p>Visitanos en nuestra pagina de Facebook official</p>
                              </div>
                              <a href="2" className="btn_footer">
                                    VISITANOS
                              </a>
                        </div>
                  </div>
                  <div className="footer">
                        <img src={logo} alt="logo" />
                  </div>
            </footer>
      );
};

export default Footer;
