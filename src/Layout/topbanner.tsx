import styles from "../css/Layout-css/TopBanner.module.css";

export function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.container}>
        <div className={styles.hiddenOnMobile} />
        <p className={styles.text}>Summer Sale Free Express Delivery!</p>
      </div>
    </div>
  );
}
