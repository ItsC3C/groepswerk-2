import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { RootState, AppDispatch } from "../store/store";
import FiltersComponent from "../components/ShopComponents/FiltersComponent";
import ProductGridComponent from "../components/ShopComponents/ProductGridComponent";
import PaginationComponent from "../components/ShopComponents/PaginationComponent";
import styles from "../css/Components-css/ShopPageCSS/shopPage.module.css";
import { Loading } from "../components/LoadingComponent/Loading";
import { useSearchParams } from "react-router-dom";

// ✅ Veilig converteren naar objectvorm
const normalizeToObject = (
  value: string | { _id: string; name: string } | undefined | null
): { _id: string; name: string } => {
  if (!value) return { _id: "unknown", name: "Unknown" };
  return typeof value === "string" ? { _id: value, name: value } : value;
};

const ITEMS_PER_PAGE = 10;

const ShopPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "All";
  const rarity = searchParams.get("rarity") || "All";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page") ?? 1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts()).catch(console.error);
    }
  }, [dispatch, status]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>Failed to load products.</p>;

  // ✅ Filtering & sorting
  const filtered = products
    .filter(
      (p) =>
        category === "All" || normalizeToObject(p.category).name === category
    )
    .filter(
      (p) => rarity === "All" || normalizeToObject(p.rarity).name === rarity
    )
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

  // ✅ Unieke & genormaliseerde filters
  const categories = Array.from(
    new Map(
      products
        .map((p) => normalizeToObject(p.category))
        .filter((c) => c.name !== "Unknown") // optioneel
        .map((obj) => [obj._id, obj])
    ).values()
  );

  const rarities = Array.from(
    new Map(
      products
        .map((p) => normalizeToObject(p.rarity))
        .filter((r) => r.name !== "Unknown") // optioneel
        .map((obj) => [obj._id, obj])
    ).values()
  );

  return (
    <main className={styles.shop}>
      <FiltersComponent
        params={searchParams}
        setParams={setSearchParams}
        categories={categories}
        rarities={rarities}
      />
      <ProductGridComponent
        products={paginated}
        filters={{ category, rarity, sort, page }}
      />
      <PaginationComponent
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        filters={{ category, rarity, sort }}
        page={page}
        setParams={setSearchParams}
      />
    </main>
  );
};

export default ShopPage;
