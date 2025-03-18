import React from "react";
import styles from "../../css/Components-css/WishListCSS/WishListHeaderComponent.module.css";

interface WishListHeaderProps {
  count: number;
}

const WishListHeadercomponent: React.FC<WishListHeaderProps> = ({ count }) => {
  return (
    <div className={styles.wishlistHeader}>
      <div className={styles.headerMain}>
        <h1 className={styles.wishlistTitle}>Wishlist ({count})</h1>
        <button className={styles.moveAllButton}>Move All To Bag</button>
      </div>
    </div>
  );
};

export default WishListHeadercomponent;
