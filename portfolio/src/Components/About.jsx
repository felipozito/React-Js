import React from "react";
import "../Styles/about.css";
import imgAbout from "../Assets/about.jpg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
      return (
            <section className="about" id="about">
                  <div className="about-img">
                        <img src={imgAbout} alt="about" />
                  </div>
                  <div className="about-text">
                        <h2>About Me</h2>
                        <h5>
                              Developer <span>& Desginer</span>
                        </h5>
                        <p>
                              Profesional con formación en Redes, Telecomunicaciones y Desarrollo Web Fronted , que aspira encontrar un puesto laboral
                              en el que pueda desarrollar mis habilidades y mi pasión. Tecnológicamente hábil, ofrezco experiencia en fibra óptica,
                              gestión de personal técnico, soporte técnico, helpdesk con muchas plataformas de medios digitales, programas de
                              tecnología de oficina y habilidades informáticas avanzadas.
                        </p>
                        <a href="../Assets/CV FELIPE ASIMBAYA.pdf" download={"Curriculum"} className="btn">
                              Download CV
                        </a>
                  </div>

                  <VerticalTimeline className="timelineContent">
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{ background: "#101010", color: "#fff" }}
                              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                              date="Septiembre 2021 -  Enero 2022"
                              iconStyle={{ background: "#f9004d", color: "#fff" }}
                        >
                              <h3 className="vertical-timeline-element-title">Jefe Tecnico</h3>
                              <h4 className="vertical-timeline-element-subtitle">JassaTelecom</h4>
                              <p className="timeline-p">
                                    Análisis y Diseño de red Gpon, Control y Análisis del personal de Campo para el levantamiento de la red de fibra
                                    óptica. Dibujante de los planos de la red de Fibra. Gestionar el Rediseño de la red. Administracion de bodega.
                              </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              date="Junio 2021 - Septiembre 2021"
                              iconStyle={{ background: "#f9004d", color: "#fff" }}
                              contentStyle={{ background: "#101010", color: "#fff" }}
                        >
                              <h3 className="vertical-timeline-element-title">Adminitrador</h3>
                              <h4 className="vertical-timeline-element-subtitle">Tecnologia para llevar</h4>
                              <p className="timeline-p">
                                    Servicio de help desk. Soporte en software y mantenimiento de LaptoControl de salida e ingreso de mercaderia. Uso
                                    y planificación con Kardex. Administración de Local y atención al cliente.
                              </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              date="Marzo 2021 - Junio 2021"
                              iconStyle={{ background: "#f9004d", color: "#fff" }}
                              contentStyle={{ background: "#101010", color: "#fff" }}
                        >
                              <h3 className="vertical-timeline-element-title">Ingeniero de Planta</h3>
                              <h4 className="vertical-timeline-element-subtitle">Cinnet</h4>
                              <p className="timeline-p">
                                    Actualización de planos en AutoCAD del cableado eléctrico,red, accesos, seguridades y sistema contra incendios.
                                    Control de calidad e Inspeccion de instalacion del cableado , Gestion de material, eleboracion de informes de
                                    fiscalizacion. Planificación y ejecucion de instalación de infraestructura depuntos de Datos,
                              </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              date="Marzo 2020 - Marzo 2021"
                              iconStyle={{ background: "#f9004d", color: "#fff" }}
                              contentStyle={{ background: "#101010", color: "#fff" }}
                        >
                              <h3 className="vertical-timeline-element-title">Help Desk</h3>
                              <h4 className="vertical-timeline-element-subtitle">Fundacion Scorpius</h4>
                              <p className="timeline-p">
                                    Gestión De Cms y administración de sitio web.Recepción y solución de problemas networking. Manejo de caja chica.
                                    Atención a clientes. Procesos de mantenimiento, respaldo de servidores.Mantenimiento y actualización de laptops y
                                    computadoras.
                              </p>
                        </VerticalTimelineElement>
                  </VerticalTimeline>
            </section>
      );
};

export default About;
