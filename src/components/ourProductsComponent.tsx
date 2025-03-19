import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./prodcutcardComponent";
import { Product } from "../types";
import styles from "../css/Components-css/ourProductsComponent.module.css";

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
      <h2>Explore Our Pokémon Cards</h2>
      <div className={styles.productGrid}>
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating?.rate || 4} // Default rating als er gene is
            reviews={product.rating?.count || 0} // default review als er geen is
          />
        ))}
      </div>
    </section>
  );
}
