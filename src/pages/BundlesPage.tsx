import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBundles } from "../store/bundleSlice";
import { RootState, AppDispatch } from "../store/store";
import BundleGridComponent from "../components/ShopComponents/BundleGridComponent";
import { Loading } from "../components/LoadingComponent/Loading";

const BundlesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bundles, status } = useSelector((state: RootState) => state.bundles);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBundles());
    }
  }, [dispatch, status]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>Failed to load bundles.</p>;

  return (
    <div>
      <BundleGridComponent bundles={bundles} />
    </div>
  );
};

export default BundlesPage;
