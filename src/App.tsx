import { useEffect, ReactNode } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import Layout from "./Layout/Layout";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ShopPage from "./pages/ShopPage";
import ProductsPage from "./pages/ProductPages";
import BundlesPage from "./pages/BundlesPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import PageNotFound from "./pages/PageNoutFound";
import DetailPage from "./pages/DetailPage";
import MyProfilePage from "./pages/MyProfilePage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import OrdersPage from "./pages/OrdersPage";
import ReturnPage from "./pages/ReturnPage";
import CancellationPage from "./pages/CancellationPage";
import BundleDetailPage from "./pages/BundleDetailPage";

const PrivateRoute = ({ children }: { children: ReactNode }): any => {
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (!user) {
      toast.error(
        <span>
          Please <Link to="/login">Login</Link> or{" "}
          <Link to="/register">Register</Link>
        </span>
      );
    }
  }, [user]);

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

const ExternalRedirect = ({ url }: { url: string }): null => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
};

const App = (): any => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route index element={<ProductsPage />} />
          <Route path=":type" element={<BundlesPage />} />
          <Route path=":type/:series" element={<BundlesPage />} />
        </Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishlistPage />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <MyAccountPage />
            </PrivateRoute>
          }
        >
          <Route index element={<MyProfilePage />} />
          <Route path="address-book" element={<AddressPage />} />
          <Route path="payment-options" element={<PaymentPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="returns" element={<ReturnPage />} />
          <Route path="cancellations" element={<CancellationPage />} />
        </Route>
        <Route path="/bundle/:slug" element={<BundleDetailPage />} />
        <Route path="/product/:slug" element={<DetailPage />} />
        <Route
          path="/admin"
          element={
            <ExternalRedirect url="https://gw2-v1-0-0.onrender.com/login" />
          }
        />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
