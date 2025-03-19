import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./prodcutcardComponent";
import { Product } from "../types";
import styles from "../css/Components-css/ourProductsComponent.module.css";
import leftArrow from "../assets/arrow_left.png";
import rightArrow from "../assets/arrow_right.png";

export function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // voorlopige api
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
          <button className={styles.navButton} aria-label="Previous category">
            <img src={leftArrow} alt="Previous" className={styles.icon} />
          </button>
          <button className={styles.navButton} aria-label="Next category">
            <img src={rightArrow} alt="Next" className={styles.icon} />
          </button>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className={styles.productCardWrapper}>
            {(product.rating?.rate ?? 0) >= 4.5 && (
              <div className={styles.newBadge}>New</div>
            )}

            <ProductCard
              name={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating?.rate ?? 4}
              reviews={product.rating?.count ?? 0}
            />
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <button className={styles.viewButton}>View All Products</button>
      </div>
    </section>
  );
}
