import styles from "../css/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.TopHeader}>
        <div className={styles.MainHolder}>
          <div className={styles.TextHolder}>
            <p className={styles.Sale}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#" className={styles.ShopLink}>
              Shop Now
            </a>
          </div>
        </div>
        <div className={styles.LanguageHolder}>
          <span className={styles.LanguageDropdown}>English</span>
          <div className={styles.LanguageDropdownIcon}>
            {/* INSERT ICON HERE */}
          </div>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.headerContent}>
          <div className={styles.frameLogo}>
            <div className={styles.logo}>
              <div className={styles.exclusive}>Exclusive</div>
            </div>
            <div className={styles.frameMenu}>
              <div className={styles.headerItem}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.headerItem}>
                <div className={styles.contact}>Contact</div>
              </div>
              <div className={styles.headerItem}>
                <div className={styles.about}>About</div>
              </div>
              <div className={styles.headerItem}>
                <div className={styles.signUp}>Sign Up</div>
              </div>
            </div>
          </div>

          <div className={styles.frameIcons}>
            <div className={styles.searchComponent}>
              <div className={styles.searchFrame}>
                <div className={styles.searchText}>
                  What are you looking for?
                </div>
                <div className={styles.searchIcon}>
                  <div className={styles.vector}>{/*SEARCHGLASS ICON*/}</div>
                </div>
              </div>
            </div>

            <div className={styles.iconSet}>
              <div className={styles.wishlist}>
                <div className={styles.vector}>{/*LIKED ICON*/}</div>
              </div>
              <div className={styles.cartWithBuy}>
                <div className={styles.cart}>
                  <div className={styles.vector}>{/*CART ICON*/}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
