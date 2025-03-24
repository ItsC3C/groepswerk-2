import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchBundles } from "../store/bundleSlice";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import ProductImageComponent from "../components/DetailComponents/ProductImageComponent";
import BundleDetailsComponent from "../components/DetailComponents/BundleDetailsComponent";
import { Loading } from "../components/LoadingComponent/Loading";
import styles from "../css/Components-css/DetailCSS/DetailPage.module.css";
import slugify from "slugify";

const BundleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const bundles = useSelector((state: RootState) => state.bundles.bundles);
  const status = useSelector((state: RootState) => state.bundles.status);

  // ✅ Fetch bundles bij mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBundles());
    }
  }, [dispatch, status]);

  // ✅ Wacht op laden
  if (status === "loading" || bundles.length === 0) {
    return <Loading />;
  }

  // ✅ Zoek bundle op basis van slug
  const bundle = bundles.find(
    (b) => slugify(b.name, { lower: true, strict: true }) === slug
  );

  // ✅ Toon pas "not found" als status succeeded is
  if (!bundle && status === "success") {
    return <div>Bundle not found</div>;
  }

  if (!bundle) return <Loading />;

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

      {/* Related bundles? Laat maar weten bro 😎 */}
    </div>
  );
};

export default BundleDetailPage;
