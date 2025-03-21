import { useSearchParams } from "react-router-dom";
import styles from "../../css/Components-css/ShopPageCSS/PaginationComponent.module.css";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const updatePage = (newPage: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: String(newPage),
    });
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => updatePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className={styles.pageInfo}>
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => updatePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
