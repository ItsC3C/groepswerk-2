import { Heart, Eye } from "lucide-react";
import styles from "../../css/Components-css/HomeCSS/productcardComponent.module.css";
import Button from "../ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart } from "../../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { PokemonBundle } from "../../types";
import slugify from "slugify";
export const BundleCard: React.FC<PokemonBundle> = ({
  _id,
  name,
  img,
  series,
  price,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.includes(_id);

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={img} alt={name} />

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
            to={`/bundle/${slugify(name, { lower: true, strict: true })}`}
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
        <p className={styles.productSeries}>{series}</p>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
