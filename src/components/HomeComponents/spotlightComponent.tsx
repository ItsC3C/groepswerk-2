import styles from "../../css/Components-css/HomeCSS/spotlightComponent.module.css";
import Button from "../../components/ButtonComponent";
import GenerationsBooster from "../../assets/Generations.webp";
import { TimeUnit } from "../../components/TimeUnitComponent";
import { Link } from "react-router";

export function Spotlight() {
  const target = Date.now() + 7 * 24 * 60 * 60 * 1000;

  return (
    <section className={styles.spotlight}>
      <div className={styles.spotlightContainer}>
        <div className={styles.content}>
          <span className={styles.category}>Ultra Rare Booster Packs</span>
          <h2 className={styles.heading}>
            X & Y Series,
            <br />
            Generations Booster Pack
          </h2>
          <div className={styles.timer}>
            <TimeUnit target={target} unit="days" label="Days" />
            <TimeUnit target={target} unit="hours" label="Hours" />
            <TimeUnit target={target} unit="minutes" label="Minutes" />
            <TimeUnit target={target} unit="seconds" label="Seconds" />
          </div>
          <Button variant="confirm" className={styles.buyButton}>
            <Link to="/shop">Buy Now!</Link>
          </Button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={GenerationsBooster} alt="Generations Booster Pack" />
          </div>
        </div>
      </div>
    </section>
  );
}
