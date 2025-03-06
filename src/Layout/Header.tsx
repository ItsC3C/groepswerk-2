import style from "../css/Layout-css/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.TopHeader}>
        <div className={style.MainHolder}>
          <div className={style.TextHolder}>
            <p className={style.Sale}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#" className={style.ShopLink}>
              Shop Now
            </a>
          </div>
        </div>
        <div className={style.LanguageHolder}>
          <span className={style.LanguageDropdown}>English</span>
          <div className={style.LanguageDropdownIcon}>
            {/* INSERT ICON HERE */}
          </div>
        </div>
      </div>

      <div className={style.mainHeader}>
        <div className={style.headerContent}>
          <div className={style.frameLogo}>
            <div className={style.logo}>
              <div className={style.exclusive}>Exclusive</div>
            </div>
            <div className={style.frameMenu}>
              <div className={style.headerItem}>
                <div className={style.home}>Home</div>
              </div>
              <div className={style.headerItem}>
                <div className={style.contact}>Contact</div>
              </div>
              <div className={style.headerItem}>
                <div className={style.about}>About</div>
              </div>
              <div className={style.headerItem}>
                <div className={style.signUp}>Sign Up</div>
              </div>
            </div>
          </div>

          <div className={style.frameIcons}>
            <div className={style.searchComponent}>
              <div className={style.searchFrame}>
                <div className={style.searchText}>
                  What are you looking for?
                </div>
                <div className={style.searchIcon}>
                  <div className={style.vector}>{/*SEARCHGLASS ICON*/}</div>
                </div>
              </div>
            </div>

            <div className={style.iconSet}>
              <div className={style.wishlist}>
                <div className={style.vector}>{/*LIKED ICON*/}</div>
              </div>
              <div className={style.cartWithBuy}>
                <div className={style.cart}>
                  <div className={style.vector}>{/*CART ICON*/}</div>
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
