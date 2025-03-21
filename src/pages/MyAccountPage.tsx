import { Outlet, NavLink } from "react-router";
import styles from "../css/Components-css/MyAccountCSS/MyAccountPage.module.css";

const MyAccountPage = () => {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.sidebar}>
        <nav className={styles.accountNav}>
          <div className={styles.title}>Manage My Account</div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                My Profile
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="address-book"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Address Book
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="payment-options"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Payment Options
              </NavLink>
            </li>
          </ul>
        </nav>

        <section className={styles.ordersSection}>
          <div className={styles.sectionTitle}>My Orders</div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="returns"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Returns
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="cancellations"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Cancellations
              </NavLink>
            </li>
          </ul>
        </section>
      </div>

      <section className={styles.outletWrapper}>
        <Outlet />
      </section>
    </div>
  );
};

export default MyAccountPage;
