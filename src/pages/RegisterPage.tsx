import ImageComponent from "../components/Register+LoginComponents/ImageComponent";
import RegisterComponent from "../components/Register+LoginComponents/RegisterComponent";
import styles from "../css/Components-css/Register+LoginCSS/Page.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <section className={styles.imageHolder}>
        <ImageComponent />
      </section>
      <section className={styles.formHolder}>
        <RegisterComponent />
      </section>
    </div>
  );
};

export default RegisterPage;
