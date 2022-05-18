import React, { useContext } from "react";
import Item from "./Item";
import { DataContext } from "../Context/DataContext";

const List = () => {
      const { list, setList, nombre, setNombre, apellido, setApellido, date, setDate, titulo, setTitulo, actividad, setActividad } =
            useContext(DataContext);
      const limpiar = () => {
            setNombre("");
            setApellido("");
            setDate("");
            setTitulo("");
            setActividad("");
      };
      const leer = (item) => {
            setNombre(item.nombre);
            setApellido(item.apellido);
            setDate(item.date);
            setTitulo(item.titulo);
            setActividad(item.actividad);
      };

      return (
            <div>
                  <h2>TO DO LIST</h2>
                  {list.map((item, index) => {
                        return (
                              <Item
                                    data={item}
                                    key={index}
                                    borrar={() => {
                                          const temp = list.filter((x) => x.nombre !== item.nombre);
                                          setList(temp);
                                    }}
                                    modificar={() => {
                                          leer(item);
                                    }}
                              />
                        );
                  })}
            </div>
      );
};

export default List;
