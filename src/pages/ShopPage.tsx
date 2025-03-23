import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { RootState, AppDispatch } from "../store/store";
import FiltersComponent from "../components/ShopComponents/FiltersComponent";
import ProductGridComponent from "../components/ShopComponents/ProductGridComponent";
import PaginationComponent from "../components/ShopComponents/PaginationComponent";
import styles from "../css/Components-css/ShopPageCSS/shopPage.module.css";
import { Loading } from "../components/LoadingComponent/Loading";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

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
  const [types, setTypes] = useState<
    { _id: string; name: string; img: string }[]
  >([]);

  const category = searchParams.get("category") || "All";
  const rarity = searchParams.get("rarity") || "All";
  const type = searchParams.get("type") || "All";
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page") ?? 1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts()).catch(console.error);
    }
  }, [dispatch, status]);

  useEffect(() => {
    axios
      .get("https://gw2-v1-0-0.onrender.com/api/types")
      .then((res) => setTypes(res.data))
      .catch((err) => console.error("Failed to fetch types:", err));
  }, []);

  if (status === "loading") return <Loading />;
  if (status === "error") return <p>Failed to load products.</p>;

  const filtered = products
    .filter(
      (p) =>
        category === "All" || normalizeToObject(p.category).name === category
    )
    .filter(
      (p) => rarity === "All" || normalizeToObject(p.rarity).name === rarity
    )
    .filter(
      (p) =>
        type === "All" ||
        p.types.some((t) => normalizeToObject(t).name === type)
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

  const categories = Array.from(
    new Map(
      products
        .map((p) => normalizeToObject(p.category))
        .filter((c) => c.name !== "Unknown")
        .map((obj) => [obj._id, obj])
    ).values()
  );

  const rarities = Array.from(
    new Map(
      products
        .map((p) => normalizeToObject(p.rarity))
        .filter((r) => r.name !== "Unknown")
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
        types={types}
      />
      <ProductGridComponent
        products={paginated}
        filters={{ category, rarity, type, sort, page }}
      />
      <PaginationComponent
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        filters={{ category, rarity, type, sort }}
        page={page}
        setParams={setSearchParams}
      />
    </main>
  );
};

export default ShopPage;
