import styles from "../../css/Components-css/Register+LoginCSS/ImageComponent.module.css";

const ImageComponent = () => {
  return (
    <div className={styles.imageHolder}>
      <img className={styles.image} src="https://placehold.co/919x706" />
    </div>
  );
};
export default ImageComponent;
