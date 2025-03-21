import styles from "../../css/Components-css/MyAccountCSS/MyProfilePage.module.css";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => (
  <section className={styles.formSection}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

export default FormSection;
