import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import WishlistGridComponent from "../components/WishListComponents/WishListGridComponent";
import WishListHeaderComponent from "../components/WishListComponents/WishListHeaderComponent";
import styles from "../css/Page.module.css";
import { PokemonCard } from "../types";

const WishlistPage: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const products = useSelector((state: RootState) => state.products.products);

  const wishlistItems: PokemonCard[] = products.filter((product) =>
    wishlist.includes(product._id)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="Wishlist" />
        <WishListHeaderComponent count={wishlistItems.length} />
        {wishlistItems.length > 0 ? (
          <WishlistGridComponent items={wishlistItems} />
        ) : (
          <p className={styles.emptyMessage}>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
