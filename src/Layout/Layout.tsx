import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TopBanner } from "./topbanner";

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
    </>
  );
};

export default Layout;
