import React from "react";
import styles from "../../css/Components-css/ShopPageCSS/FiltersComponent.module.css";

interface FiltersProps {
  params: URLSearchParams;
  setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;

  categories?: { _id: string; name: string }[];
  rarities?: { _id: string; name: string }[];
  types?: { _id: string; name: string; img: string }[];

  bundleTypes?: string[];
  bundleSeries?: string[];
}

const FiltersComponent: React.FC<FiltersProps> = ({
  params,
  setParams,
  categories = [],
  rarities = [],
  types = [],
  bundleTypes = [],
  bundleSeries = [],
}) => {
  const currentCategory = params.get("category") || "All";
  const currentRarity = params.get("rarity") || "All";
  const currentType = params.get("type") || "All";
  const currentSeries = params.get("series") || "All";
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
      {categories.length > 0 && (
        <select
          value={currentCategory}
          onChange={(e) => updateParam("category", e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((c) => (
            <option key={c._id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      )}

      {rarities.length > 0 && (
        <select
          value={currentRarity}
          onChange={(e) => updateParam("rarity", e.target.value)}
        >
          <option value="All">All Rarities</option>
          {rarities.map((r) => (
            <option key={r._id} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
      )}

      {types.length > 0 && (
        <select
          value={currentType}
          onChange={(e) => updateParam("type", e.target.value)}
        >
          <option value="All">All Types</option>
          {types.map((t) => (
            <option key={t._id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      )}

      {bundleTypes.length > 0 && (
        <select
          value={currentType}
          onChange={(e) => updateParam("type", e.target.value)}
        >
          <option value="All">All Product Types</option>
          {bundleTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      )}

      {bundleSeries.length > 0 && (
        <select
          value={currentSeries}
          onChange={(e) => updateParam("series", e.target.value)}
        >
          <option value="All">All Series</option>
          {bundleSeries.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      )}

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
