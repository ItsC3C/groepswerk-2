import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/Components-css/ShopPageCSS/shopPage.module.css";

const ShopPage: React.FC = () => {
  return (
    <main className={styles.shop}>
      <Outlet />
    </main>
  );
};

export default ShopPage;
