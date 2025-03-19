import img1 from "../../assets/AboutImage (1).png";
import styles from "../../css/Components-css/AboutCSS/OurStoryComponent.module.css";

const OurStoryComponent = () => {
  return (
    <div className={styles.ourStoryGrid}>
      <div className={styles.ourStoryText}>
        <h1 className={styles.ourStoryHeading}>Our Story</h1>
        <p className={styles.ourStoryParagraph}>
          Launced in 2015, Exclusive is South Asia premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 millions customers across
          the region.
        </p>
        <p className={styles.ourStoryParagraph}>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast pace. Exclusive offers a diverse assortment in categories ranging
          from consumer.
        </p>
      </div>
      <div className={styles.ourStoryImageContainer}>
        <img
          src={img1}
          alt="Shopping Experience"
          className={styles.ourStoryImage}
        />
      </div>
    </div>
  );
};
export default OurStoryComponent;
