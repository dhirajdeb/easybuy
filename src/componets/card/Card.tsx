import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { CardProps } from "./types";
import "./Card.css";

export default function Card(props: CardProps) {
  const { image, title, price } = props;

  const navigate = useNavigate();

  function clickHandler(e: MouseEvent) {
    e.preventDefault();

    navigate("/product", { state: props });
  }

  return (
    <div className="card" onClick={clickHandler}>
      <div className="card--image">
        <img src={image} alt="card" />
      </div>
      <h4 className="card--title">{title}</h4>
      <span className="card--price">Rs {price}</span>
    </div>
  );
}
