import { Link } from "react-router";
import styles from "../css/NotFound.module.css";
import Button from "./ButtonComponent";

const NotFoundComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button variant="navigation">
        <Link to="/">Return to Shop</Link>
      </Button>
    </div>
  );
};
export default NotFoundComponent;
