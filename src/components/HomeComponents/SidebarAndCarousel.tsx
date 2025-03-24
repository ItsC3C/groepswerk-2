import { useEffect, useState } from "react";
import PokeLogo from "../../assets/pokemon_vector.webp";
import styles from "../../css/Components-css/HomeCSS/SidebarAndCarousel.module.css";

export function SidebarAndCarousel() {
  const categories = [
    { label: "Cards", slug: " " },
    { label: "Booster Packs", slug: "booster-boxes" },
    { label: "Booster Bundles", slug: "booster-bundles" },
    { label: "Booster Boxes", slug: "booster-boxes" },
    { label: "Elite Trainer Boxes", slug: "elite-trainer-boxes" },
  ];

  const carouselImages = [
    "https://images.pokemontcg.io/ex12/23_hires.png",
    "https://images.pokemontcg.io/dp3/25_hires.png",
    "https://images.pokemontcg.io/sm115/23_hires.png",
    "https://images.pokemontcg.io/ex3/21_hires.png",
  ];
  const [animate, setAnimate] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 600); // 600ms = duur van je fadeImage animatie
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav className={styles.nav}>
          {categories.map((category, index) => (
            <a
              key={category.slug}
              href={`/shop/${category.slug}`}
              className={styles.navLink}
            >
              {category.label}
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
                src={PokeLogo}
                alt="Pokemon Logo"
                width="40"
                height="40"
                className={styles.appleImage}
              />
              <h1 className={styles.title}>
                Check Our Rare Pokemon Collection
              </h1>
              <p className={styles.discount}>Up to 10% off Voucher</p>
              <a href="/shop" className={styles.shopNow}>
                <span>Shop Now</span>
                <svg className={styles.shopIcon} />
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <a href="/shop">
              <img
                src={carouselImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                width="46px"
                height="32px"
                className={`${styles.heroImage} ${
                  animate ? styles.fadeImageAnimation : ""
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
