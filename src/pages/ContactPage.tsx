import styles from "../csS/Page-css/ContactPage.module.css";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import EmailComponent from "../components/ContactComponents/EmailComponent";
import ContactUsComponent from "../components/ContactComponents/ContactUsComponent";

export default function ContactPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="Contact" />
        <div className={styles.content}>
          <ContactUsComponent />
          <EmailComponent />
        </div>
      </div>
    </div>
  );
}
