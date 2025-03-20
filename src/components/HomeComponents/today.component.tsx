import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { RootState, AppDispatch } from "../../store/store";
import leftArrow from "../../assets/arrow_left.png";
import rightArrow from "../../assets/arrow_right.png";
import { ProductCard } from "./prodcutcardComponent";
import styles from "../../css/Components-css/HomeCSS/todayComponent.module.css";
import Button from "../ButtonComponent";

export function FlashSales() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when component loads
  }, [dispatch]);

  if (status === "loading") return <p>Loading Flash Sales...</p>;
  if (status === "error") return <p>Error loading flash sales.</p>;

  const flashSaleProducts = products
    .map((product, index) => ({
      ...product,
      discount: product.discount ?? [10, 20, 30, 40, 50, 15][index % 6], // ✅ Ensure discount exists
    }))
    .filter((product) => product.discount > 0) // ✅ Ensure products are not excluded
    .slice(0, 6); // Limit to 6 products

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.flashSales}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleWrapper}>
            <div className={styles.bar}></div>
            <h3>Today</h3>
          </div>
          <h2>Flash Sales</h2>
        </div>

        {/* Countdown Timer */}
        <div className={styles.countdown}>
          {["03", "23", "19", "56"].map((time, index) => (
            <div key={index} className={styles.wrapper}>
              <div className={styles.time}>
                <span>{time}</span>
                <span className={styles.label}>
                  {["Days", "Hours", "Minutes", "Seconds"][index]}
                </span>
              </div>
              {index < 3 && <span className={styles.separator}>:</span>}
            </div>
          ))}
        </div>

        <div className={styles.navigation}>
          <Button
            variant="navigation"
            className={styles.navButton}
            onClick={scrollLeft}
          >
            <img src={leftArrow} alt="Previous" className={styles.icon} />
          </Button>
          <Button
            variant="navigation"
            className={styles.navButton}
            onClick={scrollRight}
          >
            <img src={rightArrow} alt="Next" className={styles.icon} />
          </Button>
        </div>
      </div>

      {/* Product Slider */}
      <div className={styles.productGrid} ref={sliderRef}>
        {flashSaleProducts.length > 0 ? (
          flashSaleProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <p>No flash sales available.</p>
        )}
      </div>

      <div className={styles.viewAll}>
        <Button variant="confirm">View All Products</Button>
      </div>
    </section>
  );
}
