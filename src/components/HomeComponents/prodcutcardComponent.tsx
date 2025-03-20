import { Heart, Eye } from "lucide-react";
import styles from "../../css/Components-css/HomeCSS/productcardComponent.module.css";
import Button from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import { PokemonCard } from "../../types"; // Import the correct type

export function ProductCard({
  _id,
  name,
  imageURL,
  price = 0,
  hitPoints,
  abilities = [],
}: PokemonCard) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(_id); // Use ID instead of name

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={imageURL} alt={name} />

        {abilities.length > 1 && abilities[1] !== null && (
          <div className={styles.discount}>Special Ability!</div>
        )}

        <div className={styles.actionButtons}>
          <Button
            variant="confirm"
            className={`${styles.actionButton} ${
              isInWishlist ? styles.activeWishlist : ""
            }`}
            onClick={() =>
              isInWishlist
                ? dispatch(removeFromWishlist(_id))
                : dispatch(addToWishlist(_id))
            }
          >
            <Heart className={styles.icon} />
          </Button>
          <Button
            variant="confirm"
            to={`/product/${_id}`}
            className={styles.actionButton}
          >
            <Eye className={styles.icon} />
          </Button>
        </div>

        <Button
          variant="navigation"
          className={styles.addToCart}
          onClick={() => dispatch(addToCart(_id))}
        >
          Add To Cart
        </Button>
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>

        <div className={styles.pricing}>
          <span className={styles.currentPrice}>${price.toFixed(2)}</span>
        </div>

        <div className={styles.stats}>
          <span className={styles.hitPoints}>HP: {hitPoints}</span>
        </div>
      </div>
    </div>
  );
}
