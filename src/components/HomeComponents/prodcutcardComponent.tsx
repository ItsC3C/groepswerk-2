import { Heart, Eye } from "lucide-react";
import styles from "../../css/Components-css/HomeCSS/productcardComponent.module.css";
import Button from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { addToCart } from "../../store/cartSlice";
import { PokemonCard } from "../../types";
import { Link } from "react-router-dom";
import slugify from "slugify";

export function ProductCard({
  _id,
  name,
  imageURL,
  price,
  abilities = [],
  discount = 0,
}: PokemonCard) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(_id);

  if (price === undefined || price === null) return null;

  const discountedPrice =
    discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={imageURL} alt={name} />

        {discount > 0 && <div className={styles.discount}>-{discount}%</div>}

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
            to={`/product/${slugify(name, {
              lower: true,
              strict: true,
            })}`}
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
        <Link
          to={`/product/${slugify(name, { lower: true, strict: true })}`}
          className={styles.productName}
        >
          {name}
        </Link>

        <div className={styles.pricing}>
          <span className={styles.currentPrice}>
            ${discountedPrice.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className={styles.originalPrice}>${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
