import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { coso } from '../utils/coso';
const CardPizza = (props) => {
  return (
    <div className="card mx-2">
      <img src={props.img} className="card-img-top" alt="Plumon" />
      <div className="card-body">
        <h5 className="card-title fw-light mb-3 fs-2">Pizza {props.name}</h5>
        <hr />
        <p className="card-text h6 fw-light text-center fs-3">Ingredientes: </p>
        <p className="fw-light text-center">
          <FontAwesomeIcon icon={faPizzaSlice} /> {props.ingredients.join(", ")}
        </p>
        <hr />
        <p className="h2 fw-bold green text-center">Total:${coso(props.price)}</p>
      </div>
      <div className="butonCard">
        <button type="button" class="btn btn-light border border-dark">
          Ver mas <FontAwesomeIcon icon={faEye} />
        </button>
        <button type="button" class="btn btn-dark border border-light">
          Añadir <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
