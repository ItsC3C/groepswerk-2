import React from "react";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import DeliveryInfoComponent from "./DeliveryInfoComponent";
import styles from "../../css/Components-css/DetailCSS/ProducDetailsComponent.module.css";
import Button from "../ButtonComponent";

interface BundleDetailsProps {
  bundleId: string;
  name: string;
  price: number;
  series: string;
  type: string;
}

const BundleDetailsComponent: React.FC<BundleDetailsProps> = ({
  bundleId,
  name,
  price,
  series,
  type,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(bundleId);

  const handleWishlistToggle = () =>
    isInWishlist
      ? dispatch(removeFromWishlist(bundleId))
      : dispatch(addToWishlist(bundleId));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.inStock}>In Stock</span>

      <div className={styles.priceSection}>
        <span className={styles.price}>${price.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <Button variant="confirm" onClick={() => dispatch(addToCart(bundleId))}>
          Buy Now
        </Button>
        <Button variant="navigation" onClick={handleWishlistToggle}>
          <Heart
            className={`${styles.icon} ${
              isInWishlist ? styles.activeHeart : ""
            }`}
          />
        </Button>
      </div>

      <p className={styles.productSeries}>Series: {series}</p>
      <p className={styles.productSeries}>Type: {type}</p>

      <DeliveryInfoComponent />
    </div>
  );
};

export default BundleDetailsComponent;
