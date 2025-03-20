import { Link } from "react-router-dom";
import styles from "../css/Breadcrumb.module.css";

interface BreadcrumbComponentProps {
  current: string;
}

const BreadcrumbComponent = ({ current }: BreadcrumbComponentProps) => (
  <div className={styles.container}>
    <Link to="/" className={styles.Breadcrumblink}>
      Home
    </Link>
    <span className={styles.seperator}>/</span>
    <span className={styles.current}>{current}</span>
  </div>
);

export default BreadcrumbComponent;
