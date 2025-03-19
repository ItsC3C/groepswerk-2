import React from "react";
import styles from "../../css/Components-css/WishListCSS/WishListHeaderComponent.module.css";
import Button from "../ButtonComponent";

interface WishListHeaderProps {
  count: number;
}

const WishListHeadercomponent: React.FC<WishListHeaderProps> = ({ count }) => {
  return (
    <div className={styles.wishlistHeader}>
      <div className={styles.headerMain}>
        <h1 className={styles.wishlistTitle}>Wishlist ({count})</h1>
        <Button variant="navigation">Move All To Bag</Button>
      </div>
    </div>
  );
};

export default WishListHeadercomponent;
