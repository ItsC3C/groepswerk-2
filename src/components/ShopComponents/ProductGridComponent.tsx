import React from "react";
import { ProductCard } from "../HomeComponents/prodcutcardComponent";
import styles from "../../css/Components-css/ShopPageCSS/ProductGridComponent.module.css";

interface ProductGridProps {
  products: any[];
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
