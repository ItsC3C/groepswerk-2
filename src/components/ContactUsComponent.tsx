import CallToUsComponent from "../components/CallToUsComponent";
import WriteToUsComponent from "../components/WriteToUsComponent";
import styles from "../css/Components-css/ContactUs.module.css";
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
