import React from "react";
import img1 from "../assets/FSImage1.png";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import ProductImageComponent from "../components/DetailComponents/ProductImageComponent";
import ProductDetailsComponent from "../components/DetailComponents/ProductDetailsComponent";
import RelatedItemsComponent from "../components/DetailComponents/RealtedItemsComponent";
import styles from "../css/Components-css/DetailCSS/DetailPage.module.css";

const DetailPage: React.FC = () => {
  const productId = "havic-hv-g92";
  const product = {
    _id: productId,
    name: "Havit HV G‑92 Gamepad",
    imageURL: img1,
    price: 192,
    discount: 0,
    description:
      "PlayStation 5 Controller Skin — High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal...",
  };
  const relatedProducts = Array(4).fill(product);

  return (
    <div className={styles.container}>
      <BreadcrumbComponent current={product.name} />
      <div className={styles.content}>
        <ProductImageComponent src={product.imageURL} alt={product.name} />
        <ProductDetailsComponent
          productId={product._id}
          name={product.name}
          originalPrice={product.price}
          discount={product.discount}
          description={product.description}
        />
      </div>
      <RelatedItemsComponent products={relatedProducts} />
    </div>
  );
};

export default DetailPage;
