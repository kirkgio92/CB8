import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Navbar from "../navbar/navbar";

export default function CardList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.CardList}>
        {products.map((data) => (
          <Link to={`/products/${data.id}`} key={data.id}>
            <ProductCard productData={data} />
          </Link>
        ))}
      </div>
    </>
  );
}
