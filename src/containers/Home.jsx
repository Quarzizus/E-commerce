import React from "react";
import initialState from "../initialState";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <h1>Holi Home</h1>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
