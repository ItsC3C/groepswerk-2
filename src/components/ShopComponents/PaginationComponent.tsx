import styles from "../../css/Components-css/ShopPageCSS/PaginationComponent.module.css";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
  filters: {
    category: string;
    rarity: string;
    sort: string;
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
    updated.set("category", filters.category);
    updated.set("rarity", filters.rarity);
    updated.set("sort", filters.sort);
    setParams(updated);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => updatePage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span className={styles.pageInfo}>
        {page} / {totalPages}
      </span>
      <button
        onClick={() => updatePage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
