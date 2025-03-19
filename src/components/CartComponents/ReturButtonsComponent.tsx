import styles from "../../css/Components-css/CartCSS/ReturnButtonsComponents.module.css";
import Button from "../ButtonComponent";

const ReturnButtonsComponents = () => {
  return (
    <div className={styles.container}>
      <Button to="/shop" variant="navigation">
        Return To Shop
      </Button>
      <Button to="/cart" variant="navigation">
        Update Cart
      </Button>
    </div>
  );
};

export default ReturnButtonsComponents;
