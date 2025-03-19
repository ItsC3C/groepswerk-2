import React from "react";
import styles from "../../css/Components-css/AboutCSS/StatsComponent.module.css";

interface Stat {
  number: string;
  label: string;
}

interface StatsComponentProps {
  stats: Stat[];
}

const StatsComponent: React.FC<StatsComponentProps> = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <span className={styles.statNumber}>{stat.number}</span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsComponent;
