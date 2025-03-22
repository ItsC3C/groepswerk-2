import BreadcrumbComponent from "../components/BreadcrumbComponent";
import TermsContent from "../components/TermsComponents/TermsContent.tsx";
import styles from "../css/Page.module.css";

const TermsOfUsePage = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <BreadcrumbComponent current="Terms of Use" />
      <TermsContent />
    </div>
  </div>
);

export default TermsOfUsePage;
