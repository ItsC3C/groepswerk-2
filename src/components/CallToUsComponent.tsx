import styles from "../css/Components-css/CallToUs.module.css";

const CallToUsComponent = () => {
  return (
    <div className={styles.callToUs}>
      <div className={styles.icon}>
        <svg className={styles.iconSvg} />
      </div>
      <div className={styles.textBlock}>
        <h2>Call To Us</h2>
        <div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>
    </div>
  );
};
export default CallToUsComponent;
