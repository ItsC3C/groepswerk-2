import React from "react";
import ProductCardCartComponent, { CartItem } from "./ProductCardCartComponent";
import styles from "../../css/Components-css/CartCSS/CartItemListComponents.module.css";

interface CartItemListComponentProps {
  cartItems: CartItem[];
  onRemoveItem?: (id: string) => void;
  onDecreaseItem?: (id: string) => void;
  onIncreaseItem?: (id: string) => void;
}

const CartItemListComponent: React.FC<CartItemListComponentProps> = ({
  cartItems,
  onRemoveItem,
  onDecreaseItem,
  onIncreaseItem,
}) => {
  return (
    <div className={styles.cartListContainer}>
      <table className={styles.cartTable}>
        <thead>
          <tr className={styles.cartTableHeaderRow}>
            <th className={styles.cartTableHeaderCell}>Product</th>
            <th className={styles.cartTableHeaderCell}>Price</th>
            <th className={styles.cartTableHeaderCell}>Quantity</th>
            <th className={styles.cartTableHeaderCell}>Subtotal</th>
          </tr>
        </thead>
        <tbody className={styles.cartTableBody}>
          {cartItems.map((item) => (
            <ProductCardCartComponent
              key={item.id}
              item={item}
              onRemove={onRemoveItem}
              onDecrease={onDecreaseItem}
              onIncrease={onIncreaseItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemListComponent;
