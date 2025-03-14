import { Truck, HeadphonesIcon, Shield } from "lucide-react";
import NA1 from "../assets/FeaturedImage1.png";
import NA2 from "../assets/FeaturedImage2.png";
import NA3 from "../assets/FeaturedImage3.png";
import NA4 from "../assets/FeaturedImage4.png";
import styles from "../css/Components-css/newArrivalComponent.module.css";

export function NewArrival() {
  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className={styles.newArrival}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.bar}></div>
          <h3>Featured</h3>
        </div>
        <h2>New Arrival</h2>
      </div>

      <div className={styles.productGrid}>
        <div className={styles.primaryCard}>
          <div className={styles.imageContainer}>
            <img src={NA1} alt="PlayStation 5" />
          </div>
          <div className={styles.productInfo}>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <a href="#">Shop Now</a>
          </div>
        </div>

        <div className={styles.secondaryGrid}>
          <div className={styles.secondaryCard}>
            <div className={styles.textContent}>
              <h3>Women Collection</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <a href="#">Shop Now</a>
            </div>
            <img src={NA2} alt="Women's Collections" />
          </div>

          <div className={styles.tertiaryGrid}>
            {[
              { img: NA4, title: "Speakers", desc: "Amazon wireless speakers" },
              { img: NA3, title: "Perfume", desc: "GUCCI INTENSE OUD EDP" },
            ].map((item, index) => (
              <div key={index} className={styles.tertiaryCard}>
                <div className={styles.imageContainer}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.productInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <service.icon className={styles.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
