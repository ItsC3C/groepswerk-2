import React from "react";
import styles from "../../css/Components-css/ShopPageCSS/FiltersComponent.module.css";

interface FiltersProps {
  categories: { _id: string; name: string }[];
  rarities: { _id: string; name: string }[];
  params: URLSearchParams;
  setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
}

const FiltersComponent: React.FC<FiltersProps> = ({
  categories,
  rarities,
  params,
  setParams,
}) => {
  const category = params.get("category") || "All";
  const rarity = params.get("rarity") || "All";
  const sort = params.get("sort") || "";

  const updateParam = (key: string, value: string) => {
    setParams((prev) => {
      const updated = new URLSearchParams(prev);
      updated.set(key, value);
      updated.set("page", "1");
      return updated;
    });
  };

  return (
    <section className={styles.filters}>
      <select
        value={category}
        onChange={(e) => updateParam("category", e.target.value)}
      >
        <option value="All">All Categories</option>
        {categories.map((c) => (
          <option key={c._id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        value={rarity}
        onChange={(e) => updateParam("rarity", e.target.value)}
      >
        <option value="All">All Rarities</option>
        {rarities.map((r) => (
          <option key={r._id} value={r.name}>
            {r.name}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => updateParam("sort", e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </section>
  );
};

export default FiltersComponent;
