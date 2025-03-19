import React from "react";
import FS3 from "../assets/FSImage3.png";
import FS1 from "../assets/FSImage1.png";
import styles from "../css/Components-css/CartCSS/CartPage.module.css";
import Breadcrumb from "../components/BreadcrumbComponent";
import CartItemListComponents from "../components/CartComponents/CartItemListComponent";
import ReturnButtonsComponents from "../components/CartComponents/ReturButtonsComponent";
import CouponComponent from "../components/CartComponents/CouponComponent";
import CartTotalComponent from "../components/CartComponents/CartTotalComponent";

// Update CartItem so that id is a string (matching the imported type)
interface CartItem {
  id: string;
  quantity: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      id: "1", // id now as a string
      quantity: 1,
      name: "IPS LCD Gaming Monitor",
      image: FS3,
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      discount: 30,
    },
    {
      id: "2", // id now as a string
      quantity: 2,
      name: "HAVIT HV-G92 Gamepad",
      image: FS1,
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40,
    },
  ]);

  // Handlers for cart actions (the types now match the imported type)
  const handleRemove = (id: string): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleIncrease = (id: string): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total cart amount
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumb current="Cart" />
        <div className={styles.content}>
          <CartItemListComponents
            cartItems={cartItems}
            onRemoveItem={handleRemove}
            onIncreaseItem={handleIncrease}
            onDecreaseItem={handleDecrease}
          />
          <ReturnButtonsComponents />
          <div className={styles.cartBottom}>
            <CouponComponent />
            <CartTotalComponent total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}
