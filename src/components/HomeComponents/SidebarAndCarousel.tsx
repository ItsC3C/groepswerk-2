import Apple from "../../assets/apple.png";
import HeroImage from "../../assets/HeroImage.png";
import styles from "../../css/Components-css/HomeCSS/SidebarAndCarousel.module.css";

export function SidebarAndCarousel() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          {categories.map((category, index) => (
            <a key={category} href="#" className={styles.navLink}>
              {category}
              {(index === 0 || index === 1) && <svg className={styles.icon} />}
            </a>
          ))}
        </nav>
      </aside>

      <div className={styles.carousel}>
        <div className={styles.carouselContent}>
          <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
              <img
                src={Apple}
                alt="Apple"
                width="40"
                height="49"
                className={styles.appleImage}
              />
              <h1 className={styles.title}>iPhone 14 Series</h1>
              <p className={styles.discount}>Up to 10% off Voucher</p>
              <a href="#" className={styles.shopNow}>
                <span>Shop Now</span>
                <svg className={styles.shopIcon} />
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img
              src={HeroImage}
              alt="iPhone 14"
              width="496"
              height="352"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
