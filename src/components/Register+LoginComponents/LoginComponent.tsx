import styles from "../../css/Components-css/Register+LoginCSS/LoginComponent.module.css";
import Button from "../ButtonComponent";
import { Link } from "react-router";

const LoginComponent = () => {
  return (
    <form className={styles.loginPageForm}>
      <header className={styles.loginPageHeader}>
        <div className={styles.loginPageHeaderTitle}>
          Log in to your account
        </div>
        <div className={styles.loginPageHeaderSubtitle}>
          Enter your details below
        </div>
      </header>
      <div className={styles.loginPageInputFields}>
        <input type="email" placeholder="Email" className={styles.emailLabel} />
        <input
          type="password"
          placeholder="Password"
          className={styles.passwordLabel}
        />
      </div>
      <div className={styles.loginPageActionContainer}>
        <Button type="button" variant="confirm">
          Log In
        </Button>
        <div className={styles.forgetPassword}>Forget Password?</div>
      </div>
      <div className={styles.forgetAccount}>
        <div className={styles.loginPageAlternateActionContainer}>
          <div className={styles.loginPageRegisterContainer}>
            <div className={styles.loginPageNoAccountText}>
              Don't have an account?
            </div>
            <Link
              to="/register"
              className={styles.loginPageRegisterLinkContainer}
            >
              Create one
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
