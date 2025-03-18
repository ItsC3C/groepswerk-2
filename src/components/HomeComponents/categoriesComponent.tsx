import styles from "../../css/Components-css/HomeCSS/categoriesComponent.module.css";
import {
  FaMobileAlt,
  FaDesktop,
  FaApple,
  FaCamera,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";

const categories = [
  { name: "Phones", icon: FaMobileAlt },
  { name: "Computers", icon: FaDesktop },
  { name: "SmartWatch", icon: FaApple },
  { name: "Camera", icon: FaCamera },
  { name: "HeadPhones", icon: FaHeadphones },
  { name: "Gaming", icon: FaGamepad },
];

export function Categories() {
  return (
    <section className={styles.categories}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleWrapper}>
            <div className={styles.bar}></div>
            <h3>Categories</h3>
          </div>
          <h2>Browse By Category</h2>
        </div>

        <div className={styles.navigation}>
          <button className={styles.navButton} aria-label="Previous category">
            <svg className={`${styles.icon} prev`} />
          </button>
          <button
            className={`${styles.navButton} next`}
            aria-label="Next category"
          >
            <svg className={`${styles.icon}`} />
          </button>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className={`${styles.categoryButton} ${
                index === 3 ? styles.active : ""
              }`}
            >
              <Icon className={styles.categoryIcon} />
              <span className={styles.categoryText}>{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
