import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import style from "../css/Layout-css/Layout.module.css";
import { TopBanner } from "./topbanner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopBanner />
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
