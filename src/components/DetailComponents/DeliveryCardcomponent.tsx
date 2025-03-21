import React from "react";
import styles from "../../css/Components-css/DetailCSS/DeliveryCardComponent.module.css";

interface DeliveryCardProps {
  Icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const DeliveryCardComponent: React.FC<DeliveryCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <Icon className={styles.icon} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default DeliveryCardComponent;
