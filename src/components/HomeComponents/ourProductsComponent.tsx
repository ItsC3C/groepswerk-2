import { ProductCard } from "./prodcutcardComponent";
import EOP1 from "../../assets/EOPImage1.png";
import EOP2 from "../../assets/EOPImage2.png";
import EOP3 from "../../assets/EOPImage3.png";
import EOP4 from "../../assets/EOPImage4.png";
import EOP5 from "../../assets/EOPImage5.png";
import EOP6 from "../../assets/EOPImage6.png";
import EOP7 from "../../assets/EOPImage7.png";
import EOP8 from "../../assets/EOPImage8.png";
import styles from "../../css/Components-css/HomeCSS/ourProductsComponent.module.css";

const products = [
  {
    name: "Breed Dry Dog Food",
    image: EOP1,
    price: 100,
    rating: 5,
    reviews: 35,
    isNew: true,
  },
  {
    name: "CANON EOS DSLR Camera",
    image: EOP2,
    price: 360,
    rating: 4,
    reviews: 95,
    addToCart: true,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: EOP3,
    price: 700,
    originalPrice: 800,
    rating: 5,
    reviews: 325,
    isNew: true,
  },
  {
    name: "Curology Product Set",
    image: EOP4,
    price: 500,
    rating: 4,
    reviews: 145,
  },
  {
    name: "Kids Electric Car",
    image: EOP5,
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["#FF0000", "#0000FF"],
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: EOP6,
    price: 1160,
    rating: 5,
    reviews: 35,
    colors: ["#FF0000", "#FFFF00"],
  },
  {
    name: "GP11 Shooter USB Gamepad",
    image: EOP7,
    price: 660,
    rating: 4,
    reviews: 55,
    isNew: true,
  },
  {
    name: "Quilted Satin Jacket",
    image: EOP8,
    price: 660,
    rating: 4,
    reviews: 55,
    colors: ["#000000", "#FB5607", "#FFBE0B"],
  },
];

export function OurProducts() {
  return (
    <section className={styles.ourProducts}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleWrapper}>
            <div className={styles.bar}></div>
            <h3>Our Products</h3>
          </div>
          <h2>Explore Our Products</h2>
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
          <div key={product.name} className={styles.productCardWrapper}>
            {product.isNew && <div className={styles.newBadge}>New</div>}
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <button className={styles.viewButton}>View All Products</button>
      </div>
    </section>
  );
}
