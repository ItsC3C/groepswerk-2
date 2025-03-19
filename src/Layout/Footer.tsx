import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
} from "lucide-react";
import QRImage from "../assets/Qrcode 1.png";
import AppleImage from "../assets/download-appstore.png";
import GoogleImage from "../assets/GooglePlay.png";
import styles from "../css/Layout-css/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Exclusive</h3>
            <h4 className={styles.footerSubtitle}>Subscribe</h4>
            <p className={styles.footerText}>Get 10% off your first order</p>
            <div className={styles.subscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.subscribeInput}
              />
              <button className={styles.subscribeButton}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Support</h3>
            <address className={styles.footerAddress}>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </address>
            <p className={styles.footerText}>exclusive@gmail.com</p>
            <p className={styles.footerText}>+88015-88888-9999</p>
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
            <h3 className={styles.footerTitle}>Download App</h3>
            <p className={styles.footerText}>Save $3 with App New User Only</p>
            <div className={styles.appDownload}>
              <div className={styles.qrCode}>
                <img src={QRImage} alt="QR Code" width={96} height={96} />
              </div>
              <div className={styles.storeLinks}>
                <Link to="#">
                  <img
                    src={GoogleImage}
                    alt="Google Play"
                    width={160}
                    height={40}
                  />
                </Link>
                <Link to="#">
                  <img
                    src={AppleImage}
                    alt="App Store"
                    width={160}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com/exclusive"
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
                href="https://linkedin.com/company/"
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
          <p>&copy; Copyright Cédric 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
