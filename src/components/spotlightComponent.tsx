import styles from "../css/Components-css/spotlightComponent.module.css";
import img from "../assets/MusicBannerImage.png";

export function Spotlight() {
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className={styles.timeUnit}>
      <span className={styles.value}>{value.toString().padStart(2, "0")}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );

  return (
    <section className={styles.spotlight}>
      <div className={styles.spotlightContainer}>
        <div className={styles.content}>
          <span className={styles.category}>Categories</span>
          <h2 className={styles.heading}>
            Enhance Your
            <br />
            Music Experience
          </h2>
          <div className={styles.timer}>
            <TimeUnit value={23} label="Hours" />
            <TimeUnit value={5} label="Days" />
            <TimeUnit value={59} label="Minutes" />
            <TimeUnit value={35} label="Seconds" />
          </div>
          <button className={styles.buyButton}>Buy Now!</button>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={img} alt="JBL Speaker" />
          </div>
        </div>

        <div className={styles.gradientOverlay} />
      </div>
    </section>
  );
}
