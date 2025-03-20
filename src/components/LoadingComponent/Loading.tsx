import styles from "../../css/Components-css/LoadingCSS/Loading.module.css";

export function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
}
