import styles from "../../css/Components-css/Register+LoginCSS/ImageComponent.module.css";
import pikachu from "../../assets/pikachu.png";
const ImageComponent = () => {
  return (
    <div className={styles.imageHolder}>
      <img className={styles.image} src={pikachu} />
    </div>
  );
};
export default ImageComponent;
