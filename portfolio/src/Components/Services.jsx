import React from "react";
import Card from "./Card";
import "../Styles/services.css";

const Services = () => {
      return (
            <section className="services" id="services">
                  <div className="center">
                        <h2>My Awesome Service</h2>
                        <p>
                              There are manu variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration
                        </p>
                  </div>
                  <div className="service-content">
                        <Card
                              ico={"bx bx-world"}
                              title={"Web Desing"}
                              text={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, recusandae? A sunt sequi quod quisquam enim atque, reiciendis dicta voluptates!"
                              }
                        />
                        <Card
                              ico={"bx bxl-sketch"}
                              title={"Web Development"}
                              text={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, recusandae? A sunt sequi quod quisquam enim atque, reiciendis dicta voluptates!"
                              }
                        />
                        <Card
                              ico={"bx bx-home-alt-2"}
                              title={"App Development"}
                              text={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, recusandae? A sunt sequi quod quisquam enim atque, reiciendis dicta voluptates!"
                              }
                        />
                        <Card
                              ico={"bx bx-home-alt-2"}
                              title={"App Development"}
                              text={
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, recusandae? A sunt sequi quod quisquam enim atque, reiciendis dicta voluptates!"
                              }
                        />
                  </div>
            </section>
      );
};

export default Services;
