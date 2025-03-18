import styles from "../css/Components-css/EmailComponent.module.css";

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
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </div>
    </div>
  );
};
export default EmailComponent;
