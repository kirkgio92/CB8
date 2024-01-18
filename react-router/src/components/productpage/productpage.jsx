import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Navbar from "../navbar/navbar";

export default function ProductPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.ProductPage}>
        <div className={styles.title_rating_wrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.Title}>{product.title}</h2>
            <p className={styles.category}>{product.category}</p>
          </div>
          <p className={styles.rating}>{product.rating}⭐</p>
        </div>
        <div className={styles.imgWrapper}>
          <img
            className={styles.mainImg}
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.discount}>{product.discountPercentage}% OFF</p>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.addBtn}>Add to Cart</button>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>
      </div>
    </>
  );
}
