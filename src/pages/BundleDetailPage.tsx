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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBundles());
    }
  }, [dispatch, status]);

  if (status === "loading" || bundles.length === 0) {
    return <Loading />;
  }

  const bundle = bundles.find(
    (b) => slugify(b.name, { lower: true, strict: true }) === slug
  );

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
    </div>
  );
};

export default BundleDetailPage;
