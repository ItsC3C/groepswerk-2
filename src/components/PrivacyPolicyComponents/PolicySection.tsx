import React from "react";
import styles from "../../css/Components-css/PrivacyPolicyCSS/PolicySection.module.css";

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

const PolicySection = ({ title, children }: PolicySectionProps) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </section>
);

export default PolicySection;
