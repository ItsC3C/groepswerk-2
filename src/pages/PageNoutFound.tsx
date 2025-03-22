import BreadcrumbComponent from "../components/BreadcrumbComponent";
import NotFoundComponent from "../components/NotFoundComponent";
import styles from "../css/Page.module.css";

const PageNoutFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="404" />
        <NotFoundComponent />
      </div>
    </div>
  );
};
export default PageNoutFound;
