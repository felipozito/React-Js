import React, { useRef, useContext } from "react";
import { DataContext } from "../Context/DataContext";

import "../styles/form.css";

const Form = () => {
      const formRef = useRef(null);

      const { nombre, setNombre, apellido, setApellido, date, setDate, titulo, setTitulo, actividad, setActividad, setList, list } =
            useContext(DataContext);
      const limpiar = () => {
            setNombre("");
            setApellido("");
            setDate("");
            setTitulo("");
            setActividad("");
      };
      const submit = (e) => {
            e.preventDefault();
            const data = {
                  nombre: nombre,
                  apellido: apellido,
                  date: date,
                  titulo: titulo,
                  actividad: actividad,
            };
            const formulario = formRef.current;
            setList([...list, data]);
            console.log(list);
            limpiar();
            formulario.reset();
      };
      return (
            <div className="content-form">
                  <h2>Ingrese la Cita </h2>
                  <div className="form">
                        <form className="form" onSubmit={submit} ref={formRef}>
                              <label htmlFor="name">
                                    Nombre:
                                    <input
                                          type="text"
                                          placeholder="Ingrese Nombre"
                                          name="name"
                                          id="name"
                                          value={nombre}
                                          onChange={(e) => setNombre(e.target.value)}
                                    />
                              </label>
                              <label htmlFor="surname">
                                    Apellido:
                                    <input
                                          type="text"
                                          placeholder="Ingrese Apellido"
                                          name="surname"
                                          id="surname"
                                          value={apellido}
                                          onChange={(e) => setApellido(e.target.value)}
                                    />
                              </label>
                              <label htmlFor="date">
                                    Fecha:
                                    <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                              </label>
                              <label htmlFor="title">
                                    Titulo:
                                    <input
                                          type="text"
                                          placeholder="Ingrese Actividad"
                                          name="title"
                                          id="title"
                                          onChange={(e) => setTitulo(e.target.value)}
                                          value={titulo}
                                    />
                              </label>
                              <label htmlFor="activity">
                                    Actividad:
                                    <textarea
                                          type="text"
                                          placeholder="Ingrese Actividad"
                                          name="activity"
                                          id="activity"
                                          onChange={(e) => setActividad(e.target.value)}
                                          value={actividad}
                                    />
                              </label>
                              <input type="submit" value="submit" />
                        </form>
                  </div>
            </div>
      );
};

export default Form;
