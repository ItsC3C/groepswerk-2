import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/WishListCSS/JustForYouComponent.module.css";
import Button from "../ButtonComponent";

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
        <Button variant="navigation">See All</Button>
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
