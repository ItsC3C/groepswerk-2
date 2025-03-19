import styles from "../../css/Components-css/CartCSS/CouponComponent.module.css";
import Button from "../ButtonComponent";

const CouponComponent = () => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <input placeholder="Coupon Code" className={styles.input} />
        <Button type="button" variant="confirm">
          Apply Coupon
        </Button>
      </div>
    </div>
  );
};

export default CouponComponent;
