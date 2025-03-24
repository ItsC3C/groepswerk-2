import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchProducts } from "../store/productSlice";
import { fetchBundles } from "../store/bundleSlice";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import ProductImageComponent from "../components/DetailComponents/ProductImageComponent";
import ProductDetailsComponent from "../components/DetailComponents/ProductDetailsComponent";
import RelatedItemsComponent from "../components/DetailComponents/RealtedItemsComponent";
import styles from "../css/Components-css/DetailCSS/DetailPage.module.css";
import slugify from "slugify";

const DetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.products);
  const bundles = useSelector((state: RootState) => state.bundles.bundles);

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
    if (bundles.length === 0) dispatch(fetchBundles());
  }, [dispatch, products, bundles]);

  const product = products.find(
    (p) => slugify(p.name, { lower: true, strict: true }) === slug
  );

  const bundle = bundles.find(
    (b) => slugify(b.name, { lower: true, strict: true }) === slug
  );

  const item = product || bundle;

  if (!item) return <div>Item not found</div>;

  return (
    <div className={styles.container}>
      <BreadcrumbComponent current={item.name} />

      <div className={styles.content}>
        <ProductImageComponent
          src={"imageURL" in item ? item.imageURL : item.img}
          alt={item.name}
        />
        <ProductDetailsComponent
          productId={item._id}
          name={item.name}
          price={item.price}
        />
      </div>

      {product && (
        <RelatedItemsComponent
          products={products
            .filter((p) => p._id !== product._id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)}
        />
      )}
    </div>
  );
};

export default DetailPage;
