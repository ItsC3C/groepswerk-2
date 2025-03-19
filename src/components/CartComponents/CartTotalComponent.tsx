import React from "react";
import styles from "../../css/Components-css/CartCSS/CartTotalComponent.module.css";
import Button from "../ButtonComponent";

interface CartTotalComponentProps {
  total: number;
}

const CartTotalComponent: React.FC<CartTotalComponentProps> = ({ total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cartTotalWrapper}>
        <h2 className={styles.title}>Cart Total</h2>
        <div className={styles.details}>
          <div className={styles.detailsRow}>
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className={styles.detailsRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
        </div>
        <div className={styles.totalRow}>
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <Button type="button" variant="confirm" style={{ width: "100%" }}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotalComponent;
