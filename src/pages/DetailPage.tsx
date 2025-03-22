import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import ProductImageComponent from "../components/DetailComponents/ProductImageComponent";
import ProductDetailsComponent from "../components/DetailComponents/ProductDetailsComponent";
import RelatedItemsComponent from "../components/DetailComponents/RealtedItemsComponent";
import styles from "../css/Components-css/DetailCSS/DetailPage.module.css";
import slugify from "slugify";

const DetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find(
      (p) => slugify(p.name, { lower: true, strict: true }) === slug
    )
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = Array(4).fill(product);

  return (
    <div className={styles.container}>
      <BreadcrumbComponent current={product.name} />
      <div className={styles.content}>
        <ProductImageComponent src={product.imageURL} alt={product.name} />
        <ProductDetailsComponent
          productId={product._id}
          name={product.name}
          price={product.price}
        />
      </div>
      <RelatedItemsComponent products={relatedProducts} />
    </div>
  );
};

export default DetailPage;
