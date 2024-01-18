import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export default function ProductCard({ productData }) {
  const { title, price, category, thumbnail } = productData;

  return (
    <div className={styles.ProductCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.cardImg} src={thumbnail} alt={title} />
        </div>
        <div className={styles.infoWrapper}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.category}>{category}</p>
          <div className={styles.price_heart_wrapper}>
            <p className={styles.price}>${price}</p>
            <FontAwesomeIcon
              className={styles.heartIcon}
              icon={faHeartCirclePlus}
              size="2x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
