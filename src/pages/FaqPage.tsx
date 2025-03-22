import BreadcrumbComponent from "../components/BreadcrumbComponent";
import FaqAccordion from "../components/FAQComponents/FaqAccordion";
import styles from "../css/Page.module.css";

const FaqPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="Frequently Asked Question" />
        <FaqAccordion />
      </div>
    </div>
  );
};
export default FaqPage;
