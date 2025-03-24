import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBundles } from "../store/bundleSlice";
import { RootState, AppDispatch } from "../store/store";
import BundleGridComponent from "../components/ShopComponents/BundleGridComponent";
import PaginationComponent from "../components/ShopComponents/PaginationComponent";
import BundleFiltersComponent from "../components/ShopComponents/BundleFiltersComponent";
import { Loading } from "../components/LoadingComponent/Loading";
import { useParams, useSearchParams } from "react-router-dom";
import { slugToType } from "../utils/TypeSlugMap";

const ITEMS_PER_PAGE = 12;

const BundlesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { bundles, status } = useSelector((state: RootState) => state.bundles);
  const [searchParams, setSearchParams] = useSearchParams();
  const { type: typeSlug = "all", series = "all" } = useParams();

  const type = slugToType[typeSlug] || "all";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page") ?? 1);

  useEffect(() => {
    if (status === "idle" || bundles.length === 0) {
      dispatch(fetchBundles());
    }
  }, [dispatch, status, bundles.length]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>Failed to load bundles.</p>;

  const filtered = bundles
    .filter((b) => type === "all" || b.type === type)
    .filter((b) => series === "all" || b.series === series)
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

  const allTypes = [...new Set(bundles.map((b) => b.type))];
  const allSeries = [...new Set(bundles.map((b) => b.series))];

  return (
    <main>
      <BundleFiltersComponent bundleTypes={allTypes} bundleSeries={allSeries} />

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
