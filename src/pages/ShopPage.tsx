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
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status !== "idle") return <Loading />;

  return (
    <main className={styles.shop}>
      <FiltersComponent
        params={searchParams}
        setParams={setSearchParams}
        categories={products.map((p) => p.category)}
        rarities={products.map((p) => p.rarity)}
      />
      <ProductGridComponent
        products={products}
        filters={{ category, rarity, sort, page }}
      />
      <PaginationComponent
        products={products}
        filters={{ category, rarity, sort }}
        page={page}
        setParams={setSearchParams}
      />
    </main>
  );
};

export default ShopPage;
