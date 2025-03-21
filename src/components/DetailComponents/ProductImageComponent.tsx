import React from "react";
import styles from "../../css/Components-css/DetailCSS/ProductImageComponent.module.css";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImageComponent: React.FC<ProductImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

export default ProductImageComponent;
