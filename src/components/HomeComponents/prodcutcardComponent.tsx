import { Heart, Eye } from "lucide-react";
import styles from "../../css/Components-css/HomeCSS/productcardComponent.module.css";
import Button from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
}

export function ProductCard({
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  discount,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(name); // Check of product al in de wishlist zit

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />

        {discount && <div className={styles.discount}>-{discount}%</div>}

        <div className={styles.actionButtons}>
          <Button
            variant="confirm"
            className={`${styles.actionButton} ${
              isInWishlist ? styles.activeWishlist : ""
            }`}
            onClick={() =>
              isInWishlist
                ? dispatch(removeFromWishlist(name))
                : dispatch(addToWishlist(name))
            }
          >
            <Heart className={styles.icon} />
          </Button>
          <Button
            variant="confirm"
            to="/product/1"
            className={styles.actionButton}
          >
            <Eye className={styles.icon} />
          </Button>
        </div>

        <Button
          variant="navigation"
          className={styles.addToCart}
          onClick={() => dispatch(addToCart(name))}
        >
          Add To Cart
        </Button>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>

        <div className={styles.pricing}>
          <span className={styles.currentPrice}>${price.toFixed(2)}</span>
          {originalPrice && (
            <span className={styles.originalPrice}>
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`${styles.starIcon} ${
                  i < rating ? styles.filled : styles.empty
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className={styles.reviews}>({reviews})</span>
        </div>
      </div>
    </div>
  );
}
