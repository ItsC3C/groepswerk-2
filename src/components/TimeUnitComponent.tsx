import React, { useState, useEffect } from "react";
import styles from "../css/TimeUnit.module.css";

interface TimeUnitProps {
  target: number;
  unit: "days" | "hours" | "minutes" | "seconds";
  label: string;
}

export function TimeUnit({ target, unit, label }: TimeUnitProps) {
  const [value, setValue] = useState("00");

  const calculateValue = () => {
    const diff = target - Date.now();
    if (diff <= 0) return "00";
    let val = 0;
    switch (unit) {
      case "days":
        val = Math.floor(diff / (1000 * 60 * 60 * 24));
        break;
      case "hours":
        val = Math.floor((diff / (1000 * 60 * 60)) % 24);
        break;
      case "minutes":
        val = Math.floor((diff / (1000 * 60)) % 60);
        break;
      case "seconds":
        val = Math.floor((diff / 1000) % 60);
        break;
      default:
        val = 0;
    }
    return String(val).padStart(2, "0");
  };

  useEffect(() => {
    setValue(calculateValue());
    const interval = setInterval(() => {
      setValue(calculateValue());
    }, 1000);
    return () => clearInterval(interval);
  }, [target, unit]);

  return (
    <div className={styles.timeUnit}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
