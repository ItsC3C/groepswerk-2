import React from "react";
import styles from "../css/Components-css/CartCSS/CartPage.module.css";
import Breadcrumb from "../components/BreadcrumbComponent";
import CartItemListComponents from "../components/CartComponents/CartItemListComponent";
import ReturnButtonsComponents from "../components/CartComponents/ReturButtonsComponent";
import CouponComponent from "../components/CartComponents/CouponComponent";
import CartTotalComponent from "../components/CartComponents/CartTotalComponent";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addToCart, removeFromCart, reduceFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

interface CartItem {
  id: string;
  quantity: number;
  name: string;
  image: string;
  price: number;
}

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.products);

  const items = cart
    .map((el) => {
      const result = products.find((product) => product._id == el.id);
      if (result) {
        return {
          id: el.id,
          name: result.name,
          quantity: el.quantity,
          price: result.price,
          image: result.imageURL,
        };
      }
    })
    .filter((el) => el !== undefined);

  const [cartItems, setCartItems] = React.useState<CartItem[]>(items);

  const handleRemove = (id: string): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id: string): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    dispatch(addToCart(id));
  };

  const handleDecrease = (id: string): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    cartItems.forEach((el) => {
      if (el.id == id && el.quantity > 1) {
        dispatch(reduceFromCart(id));
      }
    });
  };

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
            <CartTotalComponent total={Number(total.toFixed(2))} />
          </div>
        </div>
      </div>
    </div>
  );
}
