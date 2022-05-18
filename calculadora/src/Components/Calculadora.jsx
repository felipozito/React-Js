import React, { useState } from "react";
import { btns, BTN_ACTIONS } from "./btnConfig";
import "../Styles/styles.css";

const Calculator = () => {
      const [expression, setExpression] = useState("");
      const expDiv = document.querySelector(".calculator__result__exp");

      const btnClick = (item) => {
            if (item.action === BTN_ACTIONS.THEME) document.body.classList.toggle("dark");
            if (item.action === BTN_ACTIONS.ADD) {
                  addSpan(item.display);
                  const oper = item.display !== "x" ? item.display : "*";
                  setExpression(expression + oper);
            }

            if (item.action === BTN_ACTIONS.DELETE) {
                  console.log(expDiv.parentNode);
                  expDiv.parentNode.querySelector("div:last-child").innerHTML = "";
                  expDiv.innerHTML = "";
                  setExpression("");
            }

            if (item.action === BTN_ACTIONS.CALCULAR) {
                  if (expression.trim().length <= 0) return;
                  expDiv.parentNode.querySelector("div:last-child").remove();
                  const cloneNode = expDiv.cloneNode(true);
                  expDiv.parentNode.appendChild(cloneNode);
                  const transform = `translateY(${-(expDiv.offsetHeight + 10) + "px"}) scale(0.4)`;
                  try {
                        /*eslint-disable no-eval */
                        let res = eval(expression);
                        setExpression(res.toString());
                        cloneNode.style.transform = transform;
                        expDiv.innerHTML = "";
                        addSpan(Math.floor(res * 100) / 100);
                  } catch {
                        cloneNode.style.transform = transform;
                        cloneNode.innerHTML = "Syntax err";
                  }
            }
      };

      const addSpan = (content) => {
            const span = document.createElement("span");
            span.innerHTML = content;
            expDiv.appendChild(span);
      };

      return (
            <div className="calculator">
                  <div className="calculator__result">
                        <div className="calculator__result__exp"></div>
                        <div className="calculator__result__exp"></div>
                  </div>
                  <div className="calculator__btns">
                        {btns.map((item, index) => (
                              <button key={index} className={item.class} onClick={() => btnClick(item)}>
                                    {item.display}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default Calculator;
