import React, { useContext } from "react";
import Product from "./Product";
import "./styles/Products.scss";
import AppContext from "../context/AppContext";

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handlerAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <article className="Products">
      <section className="Products-items">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handlerAddToCart={handlerAddToCart}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Products;
