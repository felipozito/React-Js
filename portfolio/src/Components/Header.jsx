import React, { useState } from "react";
import "../Styles/header.css";

const Header = () => {
      const [scroll, setScroll] = useState(false);
      const [ico, setIco] = useState(false);
      let push = 1;

      window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setScroll(true) : setScroll(false);
      });

      window.onscroll = () => {
            setIco(false);
      };

      return (
            <header className={`header ${scroll ? "sticky" : ""}`}>
                  <a href="#" className="logo">
                        Portfolio
                  </a>
                  <div className={`bx bx-menu ${ico ? "bx-x" : ""}`} id="menu-icon" onClick={() => setIco(!ico)}></div>
                  <ul className={`navbar ${ico ? "active" : ""}`}>
                        <li>
                              <a href="#home">Home</a>
                        </li>
                        <li>
                              <a href="#about">About Us</a>
                        </li>
                        <li>
                              <a href="#services">Services</a>
                        </li>
                        <li>
                              <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                              <a href="#contact">Contact Us</a>
                        </li>
                  </ul>
                  <a href="../Assets/CV FELIPE ASIMBAYA.pdf" className="h-btn" download={"Curriculum"}>
                        Curriculum
                  </a>
            </header>
      );
};

export default Header;
