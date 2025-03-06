import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../css/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
