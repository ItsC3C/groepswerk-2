import { Heart, Eye } from "lucide-react";
import styles from "../../css/Components-css/HomeCSS/productcardComponent.module.css";
import Button from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import { PokemonCard } from "../../types";

export function ProductCard({
  _id,
  name,
  imageURL,
  price,
  hitPoints,
  abilities = [],
  discount = 0, //  Default discount to 0 if missing
}: PokemonCard) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(_id);

  // Hide cards with no price
  if (price === undefined || price === null) {
    return null; // Don't render if no price
  }

  // Use discounted price instead of original price if discount is applied
  const discountedPrice =
    discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={imageURL} alt={name} />

        {/* Show discount if applicable */}
        {discount > 0 && <div className={styles.discount}>-{discount}%</div>}

        {/* Only show "Special Ability!" label if NO discount exists */}
        {discount === 0 && abilities.length > 1 && abilities[1] !== null && (
          <div className={styles.specialAbility}>Special Ability!</div>
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
          {/* If price exists, show formatted price; otherwise, show 'N/A' */}
          <span className={styles.currentPrice}>
            {price !== undefined && price !== null
              ? `$${discountedPrice.toFixed(2)}`
              : "N/A"}
          </span>
          {discount > 0 && (
            <span className={styles.originalPrice}>${price.toFixed(2)}</span>
          )}
        </div>

        <div className={styles.stats}>
          <span className={styles.hitPoints}>HP: {hitPoints}</span>
        </div>
      </div>
    </div>
  );
}
