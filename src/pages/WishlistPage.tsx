import React from "react";
import FS1 from "../assets/FSImage1.png";
import FS2 from "../assets/FSImage2.png";
import FS3 from "../assets/FSImage3.png";
import FS4 from "../assets/FSImage4.png";
import BS1 from "../assets/BSPImage1.png";
import BS2 from "../assets/BSPImage2.png";
import BS3 from "../assets/BSPImage3.png";
import BS4 from "../assets/BSPImage4.png";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import JustForYouComponent from "../components/WishListComponents/JustForYouComponent";
import WishlistGridComponent from "../components/WishListComponents/WishListGridComponent";
import WishListHeaderComponent from "../components/WishListComponents/WishListHeaderComponent";
import styles from "../css/Page.module.css";

export interface WishlistItem {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
}

export interface JustForYouItem {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
}

const WishlistPage: React.FC = () => {
  const wishlistItems: WishlistItem[] = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: FS1,
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40,
    },
    {
      name: "AK-900 Wired Keyboard",
      image: FS2,
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: 35,
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: FS3,
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      discount: 30,
    },
    {
      name: "S-Series Comfort Chair",
      image: FS4,
      price: 375,
      originalPrice: 400,
      rating: 4,
      reviews: 99,
      discount: 25,
    },
  ];

  const justForYouItems: JustForYouItem[] = [
    {
      name: "The north coat",
      image: BS4,
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      name: "Gucci duffle bag",
      image: BS3,
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 65,
    },
    {
      name: "RGB liquid CPU Cooler",
      image: BS2,
      price: 160,
      originalPrice: 170,
      rating: 4,
      reviews: 65,
    },
    {
      name: "Small BookSelf",
      image: BS1,
      price: 360,
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BreadcrumbComponent current="Wishlist" />
        <div className={styles.content}></div>
        <WishListHeaderComponent count={wishlistItems.length} />
        <WishlistGridComponent items={wishlistItems} />
        <JustForYouComponent items={justForYouItems} />
      </div>
    </div>
  );
};

export default WishlistPage;
