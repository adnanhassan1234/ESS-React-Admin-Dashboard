import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import "./products.scss";

const BASE_URL = "https://fakestoreapi.com/products";

const Products = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setProducts(data);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProductsData();
  }, []);

  if (!loading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="products my-5">
          <div className="container">
            <h2>All Products</h2>
          </div>
          <div className="row mt-4">
            {product?.map((content, ind) => {
              return <ProductCard key={ind} {...content} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
