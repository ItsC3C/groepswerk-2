import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/WishListCSS/JustForYouComponent.module.css";
import Button from "../ButtonComponent";
import { Ability } from "../../types"; // Ensure correct type

export interface JustForYouItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  hitPoints: number;
  abilities: Ability[];
  rarity: string;
  discount: number;
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
          <ProductCard
            category={""}
            _id={item._id}
            name={item.name}
            imageURL={item.image}
            price={item.price}
            originalPrice={item.originalPrice}
            hitPoints={item.hitPoints}
            abilities={item.abilities}
            rarity={item.rarity}
            discount={item.discount}
            types={[]}
          />
        ))}
      </div>
    </div>
  );
};

export default JustForYouComponent;
