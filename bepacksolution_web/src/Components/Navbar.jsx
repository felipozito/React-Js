import React, { useState } from "react";
import logo from "../Assets/logo192.png";
import "../Styles/navbar.css";

const Navbar = () => {
      const [show, setShow] = useState(false);
      const [sticky, setSticky] = useState("");

      window.onscroll = () => {
            setShow(false);
            setSticky("sticky");
            let scrollY = window.scrollY;
            if (scrollY === 0) {
                  setSticky("");
            }
      };

      return (
            <nav className={`navbar  ${sticky}`}>
                  <div className="logo">
                        <a href="#Inicio" alt="#logo">
                              <img src={logo} alt="LOGO" />
                        </a>
                  </div>
                  <label htmlFor="#" className="ico">
                        <i className="bx bx-menu" onClick={() => setShow(!show)}></i>
                  </label>
                  <ul className={`list ${show ? "show" : ""}`}>
                        <li className="item">
                              <a href="#Inicio">Inicio</a>
                        </li>
                        <li className="item">
                              <a href="#Nosotros">Nosotros</a>
                        </li>
                        <li className="item">
                              <a href="#Productos">Servicios</a>
                        </li>
                        <li className="item">
                              <a href="#Contactos">Contactos</a>
                        </li>
                  </ul>
            </nav>
      );
};

export default Navbar;
