import styles from "../css/Layout-css/TopBanner.module.css";

export function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.container}>
        <div className={styles.hiddenOnMobile} />
        <p className={styles.text}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>
    </div>
  );
}
