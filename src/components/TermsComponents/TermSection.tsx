import React from "react";
import styles from "../../css/Components-css/Terms/TermSection.module.css";

interface TermSectionProps {
  title: string;
  children: React.ReactNode;
}

const TermSection = ({ title, children }: TermSectionProps) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </section>
);

export default TermSection;
