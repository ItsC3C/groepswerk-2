import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/DetailCSS/RelatedItemsComponent.module.css";
import { PokemonCard } from "../../types";

const RelatedItemsComponent: React.FC<{ products: PokemonCard[] }> = ({
  products,
}) => (
  <section className={styles.container}>
    <h2 className={styles.heading}>Related Items</h2>
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product._id}>
          {product.abilities &&
            product.abilities.length > 1 &&
            product.abilities[1] !== null && (
              <div className={styles.newBadge}>New</div>
            )}
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  </section>
);

export default RelatedItemsComponent;
