import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../card/Card";
import { capitalizeFirstLetter } from "../../utils/helperFunctions";
import { setProducts } from "../../reducer/productSlice";
import { RootState } from "../../store/types";
import "./Category.css";

export default function Category() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const categories: string[] = Array.from(
    new Set(products.map((product) => product.category))
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const productList = await response.json();
        dispatch(setProducts(productList));
      } catch (err) {
        console.log("Error: ", err);
      }
    }

    const hasNoProducts = products.length === 0;
    if (hasNoProducts) fetchProducts();
  }, [dispatch, products.length]);

  return (
    <>
      {categories.map((category, idx) => (
        <section key={idx} className="category">
          <h3 className="category--title">{capitalizeFirstLetter(category)}</h3>
          <div className="products">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <Card key={product.id} {...product} display="hidden" />
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
