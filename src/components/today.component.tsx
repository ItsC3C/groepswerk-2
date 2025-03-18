import { ProductCard } from "./prodcutcardComponent";
import img1 from "../assets/FSImage1.png";
import img2 from "../assets/FSImage2.png";
import img3 from "../assets/FSImage3.png";
import img4 from "../assets/FSImage4.png";
import styles from "../css/Components-css/todayComponent.module.css";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: img1,
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
  },
  {
    name: "AK-900 Wired Keyboard",
    image: img2,
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image: img3,
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
  },
  {
    name: "S-Series Comfort Chair",
    image: img4,
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
  },
];

export function FlashSales() {
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
          <button className={styles.navButton} aria-label="Previous category">
            <svg className={`${styles.icon} prev`} />
          </button>
          <button
            className={`${styles.navButton} next`}
            aria-label="Next category"
          >
            <svg className={`${styles.icon}`} />
          </button>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <div className={styles.viewAll}>
        <button className={styles.viewButton}>View All Products</button>
      </div>
    </section>
  );
}
