import { useLocation } from "react-router-dom";

import "./Product.css";

export default function Product() {
  const location = useLocation();
  const { image, title, description, price } = location.state;

  return (
    <div className="product">
      <div className="product--image">
        <img src={image} alt="product" />
      </div>
      <h4 className="product--title">{title}</h4>
      <span className="product--description">{description}</span>
      <span className="product--price">Rs {price}</span>
    </div>
  );
}
