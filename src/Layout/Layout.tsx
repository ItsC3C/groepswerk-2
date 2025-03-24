import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TopBanner } from "./topbanner";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
