import React from "react";
import FS3 from "../assets/FSImage3.png";
import FS1 from "../assets/FSImage1.png";
import styles from "../css/Components-css/CartCSS/CartPage.module.css";
import Breadcrumb from "../components/BreadcrumbComponent";
import CartItemListComponents from "../components/CartComponents/CartItemListComponent";
import ReturnButtonsComponents from "../components/CartComponents/ReturButtonsComponent";
import CouponComponent from "../components/CartComponents/CouponComponent";
import CartTotalComponent from "../components/CartComponents/CartTotalComponent";
// ----
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PokemonCard } from "../types";
  
// ----
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
  // ---
  const cart = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.products);
  
  const items = cart.map((el)=>{
    const result = products.find((product)=>product._id==el.id);
    if(result){
      return{
        id: el.id,
        name: result.name,
        quantity: el.quantity,
        price: result.price,
        image: result.imageURL
      }
    }
  }).filter((el)=>el!==undefined);


  console.log("c:", cart);
  console.log("p:", products);
  console.log("i:", items);
  // ---
  
  const [cartItems, setCartItems] = React.useState<CartItem[]>(items);

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
            <CartTotalComponent total={Number(total.toFixed(2))} />
          </div>
        </div>
      </div>
    </div>
  );
}
