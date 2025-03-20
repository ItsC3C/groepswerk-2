import ImageComponent from "../components/Register+LoginComponents/ImageComponent";
import LoginComponent from "../components/Register+LoginComponents/LoginComponent";
import styles from "../css/Components-css/Register+LoginCSS/Page.module.css";
const LoginPage = () => {
  return (
    <div className={styles.registerPage}>
      <section className={styles.imageHolder}>
        <ImageComponent />
      </section>
      <section className={styles.formHolder}>
        <LoginComponent />
      </section>
    </div>
  );
};

export default LoginPage;
