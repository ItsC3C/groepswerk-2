import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBundles } from "../store/bundleSlice";
import { RootState, AppDispatch } from "../store/store";
import BundleGridComponent from "../components/ShopComponents/BundleGridComponent";
import PaginationComponent from "../components/ShopComponents/PaginationComponent";
import FiltersComponent from "../components/ShopComponents/FiltersComponent";
import { Loading } from "../components/LoadingComponent/Loading";
import { useSearchParams } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

const BundlesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bundles, status } = useSelector((state: RootState) => state.bundles);
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("type") || "All";
  const series = searchParams.get("series") || "All";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page") ?? 1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBundles());
    }
  }, [dispatch, status]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>Failed to load bundles.</p>;

  // ✅ Filtering & sorting
  const filtered = bundles
    .filter((b) => type === "All" || b.type === type)
    .filter((b) => series === "All" || b.series === series)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  const totalItems = filtered.length;
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // ✅ unieke types & series
  const types = [...new Set(bundles.map((b) => b.type))];
  const seriesList = [...new Set(bundles.map((b) => b.series))];

  return (
    <main>
      <FiltersComponent
        params={searchParams}
        setParams={setSearchParams}
        bundleTypes={types}
        bundleSeries={seriesList}
      />
      <BundleGridComponent bundles={paginated} />
      <PaginationComponent
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        filters={{ type, series, sort }}
        page={page}
        setParams={setSearchParams}
      />
    </main>
  );
};

export default BundlesPage;
