import React, { useRef, useState } from "react";
import "../Styles/product.css";
import ItemProducts from "./ItemProducts";
import caja1 from "../Assets/caja1.jpg";
import caja2 from "../Assets/caja2.jpg";
import caja3 from "../Assets/caja3.jpg";
import caja4 from "../Assets/caja4.jpg";
import envase1 from "../Assets/envase1.jpg";
import envase2 from "../Assets/envase2.jpg";
import envase3 from "../Assets/envase3.jpg";
import envase4 from "../Assets/envase4.jpg";
import funda1 from "../Assets/funda1.jpg";
import funda2 from "../Assets/funda2.jpg";
import funda3 from "../Assets/funda3.jpg";
import funda4 from "../Assets/funda4.jpg";
import recipiente1 from "../Assets/recipiente1.jpg";
import recipiente2 from "../Assets/recipiente2.jpg";
import recipiente3 from "../Assets/recipiente3.jpg";
import recipiente4 from "../Assets/recipiente1.jpg";

const Product = () => {
      const cajas = [caja1, caja2, caja3, caja4];
      const envases = [envase1, envase2, envase3, envase4];
      const fundas = [funda1, funda2, funda3, funda4];
      const recipientes = [recipiente1, recipiente2, recipiente3, recipiente4];
      const close = useRef();
      const [show, setShow] = useState(false);
      const cerrar = () => {
            const cerrar = close.current;
            const posicion = window.scrollY();
            setShow(!show);
            console.log(posicion);
      };
      return (
            <main id="Productos">
                  <div className={`picture ${show ? "show" : ""}`} ref={close}>
                        <div className="preview">a</div>
                        <div className="next">a</div>
                        <label htmlFor="x" className="x" onClick={cerrar}>
                              x
                        </label>
                  </div>
                  <ItemProducts title={"CAJAS ALIMENTICIAS"} img={envases} onClick={cerrar} />
                  <ItemProducts title={"FUNDAS BIODEGRADABLES"} img={fundas} />
                  <ItemProducts title={"RECIPIENTES ALIMENTICIOS"} img={recipientes} />
                  <ItemProducts title={"ENVASES BIODEGRADABLES"} img={cajas} />
            </main>
      );
};

export default Product;
