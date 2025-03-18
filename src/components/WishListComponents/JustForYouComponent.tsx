import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/WishListCSS/JustForYouComponent.module.css";

export interface JustForYouItem {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
}

interface JustForYouComponentProps {
  items: JustForYouItem[];
}

const JustForYouComponent: React.FC<JustForYouComponentProps> = ({ items }) => {
  return (
    <div className={styles.justForYouSection}>
      <div className={styles.justForYouHeader}>
        <div className={styles.justForYouIcon} />
        <h2 className={styles.justForYouSubtitle}>Just For You</h2>
      </div>
      <div className={styles.justForYouMainHeader}>
        <h2 className={styles.justForYouMainTitle}>Just For You</h2>
        <button className={styles.seeAllButton}>See All</button>
      </div>
      <div className={styles.justForYouGrid}>
        {items.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default JustForYouComponent;
