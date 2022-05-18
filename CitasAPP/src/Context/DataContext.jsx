import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvaider = (props) => {
      const [nombre, setNombre] = useState("");
      const [apellido, setApellido] = useState("");
      const [date, setDate] = useState("");
      const [titulo, setTitulo] = useState("");
      const [actividad, setActividad] = useState("");
      const [list, setList] = useState([]);
      const [edit, setEdit] = useState([]);
      return (
            <DataContext.Provider
                  value={{ nombre, setNombre, apellido, setApellido, date, setDate, titulo, setTitulo, actividad, setActividad, list, setList }}
            >
                  {props.children}
            </DataContext.Provider>
      );
};
