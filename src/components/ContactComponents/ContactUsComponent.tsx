import CallToUsComponent from "./CallToUsComponent";
import WriteToUsComponent from "./WriteToUsComponent";
import styles from "../../css/Components-css/ContactCSS/ContactUs.module.css";
const ContactUsComponent = () => {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.content}>
        <CallToUsComponent />

        <div className={styles.divider} />
        <WriteToUsComponent />
      </div>
    </div>
  );
};
export default ContactUsComponent;
