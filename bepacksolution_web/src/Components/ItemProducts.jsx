import React from "react";

const ItemProducts = (props) => {
      return (
            <div className="content_categoria" id="{props.title}">
                  <div className="categoria_title">
                        <h2>{props.title}</h2>
                  </div>
                  <div className="content_productos">
                        <a href="#Box" className="productos">
                              <img src={props.img[0]} alt="imagen1" onClick={props.onClick} />
                        </a>
                        <a href="#Box" className="productos">
                              <img src={props.img[1]} alt="imagen2" onClick={props.onClick} />
                        </a>
                        <a href="#Box" className="productos">
                              <img src={props.img[2]} alt="imagen3" onClick={props.onClick} />
                        </a>
                        <a href="#Box" className="productos">
                              <img src={props.img[3]} alt="imagen4" onClick={props.onClick} />
                        </a>
                  </div>
            </div>
      );
};

export default ItemProducts;
