import React from "react";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import Button from "../ButtonComponent";
import { RootState } from "../../store/store";
import DeliveryInfoComponent from "./DeliveryInfoComponent";
import styles from "../../css/Components-css/DetailCSS/ProducDetailsComponent.module.css";

interface ProductDetailsProps {
  productId: string;
  name: string;
  price: number;
}

const ProductDetailsComponent: React.FC<ProductDetailsProps> = ({
  productId,
  name,
  price,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(productId);

  const handleWishlistToggle = () =>
    isInWishlist
      ? dispatch(removeFromWishlist(productId))
      : dispatch(addToWishlist(productId));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.inStock}>In Stock</span>

      <div className={styles.priceSection}>
        <span className={styles.price}>${price.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <Button variant="confirm">Buy Now</Button>
        <Button variant="navigation" onClick={handleWishlistToggle}>
          <Heart className={styles.icon} />
        </Button>
      </div>

      <DeliveryInfoComponent />
    </div>
  );
};

export default ProductDetailsComponent;
