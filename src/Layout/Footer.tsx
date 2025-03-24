import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
} from "lucide-react";
import styles from "../css/Layout-css/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Support</h3>
            <address className={styles.footerAddress}>
              Oude Baan 2, <br /> 2800 Mechelen.
            </address>
            <p className={styles.footerText}>
              <a href="mailto:support@pokestore.be">support@pokestore.be</a>
            </p>
            <p className={styles.footerText}>+32 444 55 66 77</p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Account</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <Link to="/account">My Account</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/login">Login / Register</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/cart">Cart</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Quick Link</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/terms">Terms Of Use</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/faq">FAQ</Link>
              </li>
              <li className={styles.footerListItem}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Socials</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Facebook className={styles.socialIcon} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Twitter className={styles.socialIcon} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Instagram className={styles.socialIcon} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedIn className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; Copyright Pokéstore 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
