import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  function clickHandler(e: MouseEvent) {
    e.preventDefault();

    navigate("/");
  }
  return (
    <nav>
      <h3 className="nav--title" onClick={clickHandler}>
        Easy Buy
      </h3>
      <ul className="nav--items">
        <li>Cart</li>
        <li>Account</li>
      </ul>
    </nav>
  );
}
