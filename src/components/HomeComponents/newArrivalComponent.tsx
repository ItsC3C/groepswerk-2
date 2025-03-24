import { Truck, HeadphonesIcon, Shield } from "lucide-react";
import PrismaticETB from "../../assets/Prismatic-Evolutions.png";
import Bundle151 from "../../assets/151.webp";
import LostOriginBox from "../../assets/Lost-Origin.webp";
import XYPack from "../../assets/XY(1).webp";
import styles from "../../css/Components-css/HomeCSS/newArrivalComponent.module.css";
import { Link } from "react-router-dom";

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
            <img
              src={PrismaticETB}
              alt="Prismatic Evolutions Elite Trainerbox"
            />
          </div>
          <div className={styles.productInfo}>
            <h3>PrismaticE Evolutions Elite Trainerbox</h3>
            <p>
              Elite trainer box featuring exclusive evolutions, premium cards,
              and accessories.
            </p>
            <Link to="/bundle/prismatic-evolutions-elite-trainer-box">
              Shop Now
            </Link>
          </div>
        </div>

        <div className={styles.secondaryGrid}>
          <div className={styles.secondaryCard}>
            <div className={styles.textContent}>
              <h3>151 Pokémon Bundle</h3>
              <p>
                Complete 151 Pokémon bundle featuring classic cards and
                collectibles.
              </p>
              <Link to="/bundle/151-booster-bundle">Shop Now</Link>
            </div>
            <img src={Bundle151} alt="151 Bundle" />
          </div>

          <div className={styles.tertiaryGrid}>
            {[
              {
                img: LostOriginBox,
                title: "Lost Origin Booster Box",
                desc: "Lost Origin Booster Box: Unleash epic battles, collect rare cards.",
              },
              {
                img: XYPack,
                title: "X & Y Booster Pack",
                desc: "X & Y Booster Pack: Unleash epic, rare Pokémon cards.",
              },
            ].map((item, index) => (
              <div key={index} className={styles.tertiaryCard}>
                <div className={styles.imageContainer}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={styles.productInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to="/shop">Shop Now</Link>
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
