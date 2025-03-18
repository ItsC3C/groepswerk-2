import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/WishListCSS/WishListGridComponent.module.css";

export interface WishlistItem {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
}

interface WishListGridProps {
  items: WishlistItem[];
}

const WishListGridComponent: React.FC<WishListGridProps> = ({ items }) => {
  return (
    <div className={styles.wishlistGrid}>
      {items.map((item) => (
        <ProductCard key={item.name} {...item} />
      ))}
    </div>
  );
};

export default WishListGridComponent;
