import styles from "../css/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["top-header"]}>
        <div className={styles["left-top"]}>
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
        </div>
        <div className={styles["right-top"]}>
          <a href="#">ShopNow</a>
          <a href="#" className={styles.language}>
            English
          </a>
        </div>
      </div>

      <div className={styles["main-header"]}>
        <div className={styles.logo}>Exclusive</div>
        <nav className={styles["main-nav"]}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>

        <div className={styles["search-bar"]}>
          <input type="text" placeholder="What are you looking for?" />
          <button type="button">
            <i className="fa fa-search" />
          </button>
        </div>

        <div className={styles["header-icons"]}>
          <a href="#" aria-label="Wishlist">
            <i className="fa fa-heart" />
          </a>
          <a href="#" aria-label="Cart">
            <i className="fa fa-shopping-cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
