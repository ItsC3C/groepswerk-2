import styles from "../../css/Components-css/Register+LoginCSS/RegisterComponent.module.css";
import Button from "../ButtonComponent";
import { Link } from "react-router";

const RegisterComponent = () => {
  return (
    <form className={styles.registerPageForm}>
      <header className={styles.registerPageHeader}>
        <div className={styles.registerPageHeaderTitle}>Create an account</div>
        <div className={styles.registerPageHeaderSubtitle}>
          Enter your details below
        </div>
      </header>
      <div className={styles.registerPageInputFields}>
        <input type="text" placeholder="Name" className={styles.nameLabel} />
        <input type="email" placeholder="Email" className={styles.emailLabel} />
        <input
          type="password"
          placeholder="Password"
          className={styles.passwordLabel}
        />
      </div>
      <div className={styles.registerPageActionContainer}>
        <Button type="button" variant="confirm">
          Create Account
        </Button>
        <div className={styles.registerPageAlternateActionContainer}>
          <div className={styles.registerPageGoogleSignup}>
            <Button type="button" variant="navigation">
              Sign Up with Google
            </Button>
          </div>
          <div className={styles.registerPageLoginContainer}>
            <div className={styles.registerPageAlreadyAccountText}>
              Already have account?
            </div>
            <Link to="/login" className={styles.registerPageLoginLinkContainer}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterComponent;
