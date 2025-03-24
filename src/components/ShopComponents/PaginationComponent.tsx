import styles from "../../css/Components-css/ShopPageCSS/PaginationComponent.module.css";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
  filters: {
    category?: string;
    rarity?: string;
    type?: string;
    sort: string;
    series?: string;
  };
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  page,
  setParams,
  filters,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const updatePage = (newPage: number) => {
    const updated = new URLSearchParams();

    updated.set("page", String(newPage));
    updated.set("sort", filters.sort);

    if (filters.category) updated.set("category", filters.category);
    if (filters.rarity) updated.set("rarity", filters.rarity);
    if (filters.type) updated.set("type", filters.type);
    if (filters.series) updated.set("series", filters.series);

    setParams(updated);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => updatePage(page - 1)}
        disabled={page === 1}
        className={styles.pageButton}
      >
        Previous
      </button>

      <span className={styles.pageInfo}>
        {page} / {totalPages}
      </span>

      <button
        onClick={() => updatePage(page + 1)}
        disabled={page === totalPages}
        className={styles.pageButton}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
