import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import Layout from "./Layout/Layout";
import "./css/App.css";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ShopPage from "./pages/ShopPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import PageNoutFound from "./pages/PageNoutFound";
import DetailPage from "./pages/DetailPage";
import MyProfilePage from "./pages/MyProfilePage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import OrdersPage from "./pages/OrdersPage";
import ReturnPage from "./pages/ReturnPage";
import CancellationPage from "./pages/CancellationPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<MyAccountPage />}>
          <Route path="" element={<MyProfilePage />} />
          <Route path="address-book" element={<AddressPage />} />
          <Route path="payment-options" element={<PaymentPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="returns" element={<ReturnPage />} />
          <Route path="cancellations" element={<CancellationPage />} />
        </Route>
        <Route path="/page-not-found" element={<PageNoutFound />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
