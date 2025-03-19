import styles from "../../css/Components-css/ContactCSS/EmailComponent.module.css";
import Button from "../ButtonComponent";

const EmailComponent = () => {
  return (
    <div className={styles.rightColumn}>
      <div className={styles.formRow}>
        <input type="text" placeholder="Your Name *" className={styles.input} />
        <input
          type="email"
          placeholder="Your Email *"
          className={styles.input}
        />
        <input type="tel" placeholder="Your Phone *" className={styles.input} />
      </div>
      <input placeholder="Your Message" className={styles.message} />
      <div className={styles.buttonContainer}>
        <Button variant="confirm">Send Message</Button>
      </div>
    </div>
  );
};
export default EmailComponent;
