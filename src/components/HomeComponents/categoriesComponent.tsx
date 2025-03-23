import styles from "../../css/Components-css/HomeCSS/categoriesComponent.module.css";
import pack from "../../assets/icons-01.png";
import card from "../../assets/icons-02.png";
import bundle from "../../assets/icons-03.png";
import box from "../../assets/icons-04.png";
import Button from "../../components/ButtonComponent";
import { Link } from "react-router-dom";

const categories = [
  { name: "Booster Packs", icon: pack },
  { name: "Booster Cards", icon: card },
  { name: "Booster Bundles", icon: bundle },
  { name: "Booster Boxes", icon: box },
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
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <Link
            to={`/shop/${category.name}`}
            className={styles.categoryLink}
            key={category.name}
          >
            <Button
              key={category.name}
              variant="confirm"
              className={`${styles.categoryButton} ${
                index === 3 ? styles.active : ""
              }`}
            >
              <img
                src={category.icon}
                alt={category.name}
                className={styles.categoryIcon}
              />
              <span className={styles.categoryText}>{category.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
