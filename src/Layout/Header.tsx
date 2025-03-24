import { Search, Heart, ShoppingCart, UserRound } from "lucide-react";
import { NavLink } from "react-router";
import styles from "../css/Layout-css/Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <NavLink to="/" className={styles.logo}>
            Pokéstore
          </NavLink>

          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              Register
            </NavLink>
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

            <span className={styles.iconButton}>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `${styles.icon} ${isActive ? styles.activeIcon : ""}`
                }
              >
                <Heart />
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${styles.icon} ${isActive ? styles.activeIcon : ""}`
                }
              >
                <ShoppingCart />
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `${styles.icon} ${isActive ? styles.activeIcon : ""}`
                }
              >
                <UserRound />
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
