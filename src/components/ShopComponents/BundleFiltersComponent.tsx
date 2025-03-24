import React from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import styles from "../../css/Components-css/ShopPageCSS/FiltersComponent.module.css";
import { typeToSlug } from "../../utils/TypeSlugMap";

interface BundleFiltersProps {
  bundleTypes: string[];
  bundleSeries: string[];
}

const BundleFiltersComponent: React.FC<BundleFiltersProps> = ({
  bundleTypes,
  bundleSeries,
}) => {
  const navigate = useNavigate();
  const { type: typeSlug = "all", series = "all" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "";

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;

    if (newType === "all") {
      navigate(`/shop`);
    } else {
      const newTypeSlug = typeToSlug[newType] || "all";
      navigate(`/shop/${newTypeSlug}/${series}?sort=${sort}&page=1`);
    }
  };

  const handleSeriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSeries = e.target.value || "all";
    navigate(`/shop/${typeSlug}/${newSeries}?sort=${sort}&page=1`);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    setSearchParams({ sort: newSort, page: "1" });
  };

  return (
    <section className={styles.filters}>
      {bundleTypes.length > 0 && (
        <select value={typeSlug} onChange={handleTypeChange}>
          <option value="all">Choose Type</option>
          {bundleTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      )}

      {bundleSeries.length > 0 && (
        <select value={series} onChange={handleSeriesChange}>
          <option value="all">All Series</option>
          {bundleSeries.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      )}

      <select value={sort} onChange={handleSortChange}>
        <option value="">Sort by Price</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </section>
  );
};

export default BundleFiltersComponent;
