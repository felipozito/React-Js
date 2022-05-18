import React from "react";
import "../Css/formulario.css";
const formulario = () => {
  return (
    <form action="" className="content_formulario">
      <legend className="titulo">Comunicate con nosotros</legend>

      <label htmlFor="nombre" className="nombre">
        Nombre
      </label>
      <input type="text" name="nombre" id="nombre" className="nombre_input" />
      <label htmlFor="numero" className="numero">
        Numero
      </label>
      <input type="telf" name="numero" id="numero" className="numero_input" />

      <label htmlFor="correo" className="correo">
        Correo
      </label>
      <input type="email" name="email" id="email" className="correo_input" />

      <label htmlFor="texto" className="text">
        Texto
      </label>
      <textarea name="texto" id="" rows="5" className="text_input"></textarea>

      <div className="form_boton">
        <input type="submit"></input>
      </div>
    </form>
  );
};

export default formulario;
