import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../store/wishlistSlice";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/WishListCSS/WishListGridComponent.module.css";
import { PokemonCard } from "../../types";

interface WishListGridProps {
  items: PokemonCard[];
}

const WishListGridComponent: React.FC<WishListGridProps> = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wishlistGrid}>
      {items.map((item) => (
        <ProductCard
          key={item._id}
          _id={item._id}
          name={item.name}
          imageURL={item.imageURL}
          price={item.price}
          hitPoints={item.hitPoints}
          abilities={item.abilities}
          discount={item.discount ?? 0}
          types={item.types} // ✅ ADD THIS
          rarity={item.rarity}
        />
      ))}
    </div>
  );
};

export default WishListGridComponent;
