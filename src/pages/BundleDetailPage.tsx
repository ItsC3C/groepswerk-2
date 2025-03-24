import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import ProductImageComponent from "../components/DetailComponents/ProductImageComponent";
import styles from "../css/Components-css/DetailCSS/DetailPage.module.css";
import slugify from "slugify";
import BundleDetailsComponent from "../components/DetailComponents/BundleDetailsComponent";

const BundleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const bundle = useSelector((state: RootState) =>
    state.bundles.bundles.find(
      (b) => slugify(b.name, { lower: true, strict: true }) === slug
    )
  );

  if (!bundle) return <div>Bundle not found</div>;

  return (
    <div className={styles.container}>
      <BreadcrumbComponent current={bundle.name} />

      <div className={styles.content}>
        <ProductImageComponent src={bundle.img} alt={bundle.name} />

        <BundleDetailsComponent
          bundleId={bundle._id}
          name={bundle.name}
          price={bundle.price}
          series={bundle.series}
          type={bundle.type}
        />
      </div>

      {/* Related items kan je later hier ook nog integreren indien gewenst */}
    </div>
  );
};

export default BundleDetailPage;
