import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Category from "../componets/category/Category";
import Product from "../componets/product/Product";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Category />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);
