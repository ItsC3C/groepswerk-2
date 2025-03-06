import styles from "../css/Components-css/todayComponent.module.css";
import { useState, useEffect } from "react";

const TodayComponent = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-29:00:00");
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.todayComponent}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.iconContainer}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangle} />
            </div>
            <div className={styles.todayLabel}>Today's</div>
          </div>
          <div className={styles.flashSalesLabel}>Flash Sales</div>
        </div>
        <div className={styles.countdownWrapper}>
          <div className={styles.timeUnit}>
            <div className={styles.timeLabel}>Days</div>
            <div className={styles.timeValue}>
              {String(timeLeft.days).padStart(2, "0")}
            </div>
          </div>
          <div className={styles.seperator}>:</div>
          <div className={styles.timeUnit}>
            <div className={styles.timeLabel}>Hours</div>
            <div className={styles.timeValue}>
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
          </div>
          <div className={styles.seperator}>:</div>
          <div className={styles.timeUnit}>
            <div className={styles.timeLabel}>Minutes</div>
            <div className={styles.timeValue}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
          </div>
          <div className={styles.seperator}>:</div>
          <div className={styles.timeUnit}>
            <div className={styles.timeLabel}>Seconds</div>
            <div className={styles.timeValue}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigationWrapper}>
        {/* INSERT NAVIGATION HERE */}
      </div>
    </div>
  );
};

export default TodayComponent;
