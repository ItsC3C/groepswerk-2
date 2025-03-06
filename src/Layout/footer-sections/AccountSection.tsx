import style from "../../css/Layout-css/footer.module.css";

const AccountSection = () => (
  <div className={style.AccountSection}>
    <div className={style.Account}>Account</div>
    <div className={style.Holder}>
      <div className={style.MyAccount}>My Account</div>
      <div className={style.LoginRegister}>Login / Register</div>
      <div className={style.Cart}>Cart</div>
      <div className={style.Wishlist}>Wishlist</div>
      <div className={style.Shop}>Shop</div>
    </div>
  </div>
);
export default AccountSection;
