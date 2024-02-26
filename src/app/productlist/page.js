"use client"
import React, { useState, useEffect } from "react";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        setProduct(data.products); // Assuming the response has a property named 'products'
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h5>Products</h5>
      {product.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </div>
  );
}

export default ProductList;
