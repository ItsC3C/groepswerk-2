import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../../css/Components-css/ShopPageCSS/FiltersComponent.module.css";

interface FiltersProps {
  categories: string[];
  rarities: string[];
}

const FiltersComponent: React.FC<FiltersProps> = ({ categories, rarities }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const rarity = searchParams.get("rarity") || "All";
  const sort = searchParams.get("sort") || "";

  const updateParam = (key: string, value: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      [key]: value,
      page: "1",
    });
  };

  return (
    <section className={styles.filters}>
      <select
        value={category}
        onChange={(e) => updateParam("category", e.target.value)}
      >
        <option>All Categories</option>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={rarity}
        onChange={(e) => updateParam("rarity", e.target.value)}
      >
        <option>All Rarities</option>
        {rarities.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => updateParam("sort", e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </section>
  );
};

export default FiltersComponent;
