import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../css/Layout-css/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            Exclusive
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
            <Link to="/register" className={styles.navLink}>
              Register
            </Link>
          </nav>

          <div className={styles.actions}>
            <div className={styles.searchWrapper}>
              <input
                type="search"
                placeholder="What are you looking for?"
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
            </div>

            <button className={styles.iconButton}>
              <Link to="/wishlist">
                <Heart className={styles.icon} />
              </Link>
            </button>

            <button className={styles.iconButton}>
              <Link to="/cart">
                <ShoppingCart className={styles.icon} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
