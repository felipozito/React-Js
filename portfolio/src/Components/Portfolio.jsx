import React from "react";
import "../Styles/portfolio.css";
import CardProjects from "./CardProjects";
import img1 from "../Assets/one.jpg";
import img2 from "../Assets/two.jpg";
import img3 from "../Assets/three.jpg";
import img4 from "../Assets/four.jpg";

const Portfolio = () => {
      return (
            <section className="portfolio" id="portfolio">
                  <div className="center">
                        <h2>Portfolio</h2>
                        <p>
                              There are manu variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration
                        </p>
                  </div>
                  <div className="portfolio-content">
                        <CardProjects img={img1} text={"Web Designe"} title={"The service provide for designe"} />
                        <CardProjects img={img2} text={"Web Designe"} title={"The service provide for designe"} />
                        <CardProjects img={img3} text={"Web Designe"} title={"The service provide for designe"} />
                        <CardProjects img={img4} text={"Web Designe"} title={"The service provide for designe"} />
                  </div>
            </section>
      );
};

export default Portfolio;
