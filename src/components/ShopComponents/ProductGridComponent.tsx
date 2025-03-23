import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/ShopPageCSS/ProductGridComponent.module.css";
import { PokemonCard } from "../../types";

interface ProductGridProps {
  products: PokemonCard[];
  filters: {
    category: string;
    rarity: string;
    sort: string;
    page: number;
  };
}

const ProductGridComponent: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </section>
  );
};

export default ProductGridComponent;
