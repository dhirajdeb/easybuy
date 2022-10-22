import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helperFunctions";

import Card from "../card/Card";
import { CardProps } from "../card/types";
import "./Category.css";

export default function Category() {
  const [products, setProducts] = useState([]);
  const categories: string[] = Array.from(
    new Set(products.map((product: CardProps) => product.category))
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const productList = await response.json();
        setProducts(productList);
      } catch (err) {
        console.log("Error: ", err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      {categories.map((category, idx) => (
        <section key={idx} className="category">
          <h3 className="category--title">{capitalizeFirstLetter(category)}</h3>
          <div className="products">
            {products
              .filter((product: CardProps) => product.category === category)
              .map((product: CardProps) => (
                <Card key={product.id} {...product} display="hidden" />
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
