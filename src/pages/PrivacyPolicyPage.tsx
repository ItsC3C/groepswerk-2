import BreadcrumbComponent from "../components/BreadcrumbComponent";
import PrivacyPolicyContent from "../components/PrivacyPolicyComponents/PrivacyPolicyContent";
import styles from "../css/Page.module.css";

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="Privacy Policy" />
        <PrivacyPolicyContent />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
