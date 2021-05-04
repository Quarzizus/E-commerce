import React from "react";

const Product = ({ product, handlerAddToCart }) => {
  return (
    <article className="Products-item">
      <img src={product.image} alt={product.title} />
      <section className="Product-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </section>
      <button type="button" onClick={handlerAddToCart}>
        Comprar
      </button>
    </article>
  );
};

export default Product;
