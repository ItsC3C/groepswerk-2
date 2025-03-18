import styles from "../css/Components-css/WriteToUs.module.css";

const WriteToUsComponent = () => {
  return (
    <div className={styles.writeToUs}>
      <div className={styles.icon}>
        <svg className={styles.iconSvg} />
      </div>
      <div className={styles.textBlock}>
        <h2>Write To Us</h2>
        <div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};
export default WriteToUsComponent;
