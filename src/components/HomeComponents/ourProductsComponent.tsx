import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { RootState, AppDispatch } from "../../store/store"; // Import AppDispatch
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/HomeCSS/ourProductsComponent.module.css";
import Button from "../ButtonComponent";
import leftArrow from "../../assets/arrow_left.png";
import rightArrow from "../../assets/arrow_right.png";

export function OurProducts() {
  const dispatch = useDispatch<AppDispatch>(); // ✅ FIX: Typed useDispatch
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ This will now work
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error fetching products.</p>;

  return (
    <section className={styles.ourProducts}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleWrapper}>
            <div className={styles.bar}></div>
            <h3>Our Products</h3>
          </div>
          <h2>Explore Our Pokémon Cards</h2>
        </div>

        <div className={styles.navigation}>
          <Button
            variant="navigation"
            className={styles.navButton}
            aria-label="Previous category"
          >
            <img src={leftArrow} alt="Previous" className={styles.icon} />
          </Button>
          <Button
            variant="navigation"
            className={styles.navButton}
            aria-label="Next category"
          >
            <img src={rightArrow} alt="Next" className={styles.icon} />
          </Button>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.slice(0, 8).map((product) => (
          <div key={product._id} className={styles.productCardWrapper}>
            {product.abilities.length > 1 && product.abilities[1] !== null && (
              <div className={styles.newBadge}>New</div>
            )}
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <Button variant="confirm">View All Products</Button>
      </div>
    </section>
  );
}
