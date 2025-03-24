import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { RootState, AppDispatch } from "../../store/store";
import leftArrow from "../../assets/arrow_left.png";
import rightArrow from "../../assets/arrow_right.png";
import { ProductCard } from "./prodcutcardComponent";
import styles from "../../css/Components-css/HomeCSS/todayComponent.module.css";
import Button from "../ButtonComponent";
import { Loading } from "../LoadingComponent/Loading";
import { Link } from "react-router-dom";
import { TimeUnit } from "../TimeUnitComponent"; // Import TimeUnit component

export function FlashSales() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>Error loading flash sales.</p>;

  const flashSaleProducts = products
    .map((product, index) => ({
      ...product,
      discount: product.discount ?? [10, 20, 30, 40, 50, 15][index % 6],
    }))
    .filter((product) => product.discount > 0)
    .slice(0, 6);

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

  const target = Date.now() + 1 * 24 * 60 * 60 * 1000;

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

        <div className={styles.countdown}>
          <TimeUnit target={target} unit="days" label="Days" />
          <TimeUnit target={target} unit="hours" label="Hours" />
          <TimeUnit target={target} unit="minutes" label="Minutes" />
          <TimeUnit target={target} unit="seconds" label="Seconds" />
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
        <Button variant="confirm">
          <Link to="/shop">View All</Link>
        </Button>
      </div>
    </section>
  );
}
