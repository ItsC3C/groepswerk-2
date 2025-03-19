import styles from "../../css/Components-css/CartCSS/ProductCardCartComponent.module.css";
import React from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

export interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductCardCartComponentProps {
  item: CartItem;
  onRemove?: (id: string) => void;
  onDecrease?: (id: string) => void;
  onIncrease?: (id: string) => void;
  onQuantityChange?: (id: string, value: number) => void;
}

const ProductCardCartComponent: React.FC<ProductCardCartComponentProps> = ({
  item,
  onRemove,
  onDecrease,
  onIncrease,
  onQuantityChange,
}) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (onQuantityChange && !isNaN(newValue)) {
      onQuantityChange(item.id, newValue);
    }
  };

  return (
    <tr className={styles.cartItemRow}>
      <td className={styles.cartItemCell}>
        <div className={styles.productContainer}>
          <button
            onClick={() => onRemove && onRemove(item.id)}
            className={styles.removeButton}
          >
            <X className={styles.icon} />
          </button>
          <div className={styles.imageWrapper}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.productImage}
            />
          </div>
          <span className={styles.productName}>{item.name}</span>
        </div>
      </td>
      <td className={styles.cartItemCell}>
        <span className={styles.price}>${item.price}</span>
      </td>
      <td className={styles.cartItemCell}>
        <div className={styles.quantityContainer}>
          <button
            onClick={() => onDecrease && onDecrease(item.id)}
            className={styles.quantityButton}
          >
            <ChevronDown className={styles.quantityIcon} />
          </button>
          <input
            type="text"
            value={item.quantity}
            onChange={handleQuantityChange}
            className={styles.quantityInput}
          />
          <button
            onClick={() => onIncrease && onIncrease(item.id)}
            className={styles.quantityButton}
          >
            <ChevronUp className={styles.quantityIcon} />
          </button>
        </div>
      </td>
      <td className={styles.cartItemCell}>
        <span className={styles.subtotal}>${item.price * item.quantity}</span>
      </td>
    </tr>
  );
};

export default ProductCardCartComponent;
