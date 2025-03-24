import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../../css/Components-css/Register+LoginCSS/LoginComponent.module.css";
import Button from "../ButtonComponent";
import { loginUser } from "../../store/userSlice";
import type { AppDispatch } from "../../store/store";

const LoginComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error: any) => {
        const errorMessage =
          typeof error === "object" && error !== null
            ? error.message || JSON.stringify(error)
            : error;
        toast.error(`Login failed: ${errorMessage}`);
      });
  };

  return (
    <form className={styles.loginPageForm} onSubmit={handleSubmit}>
      <header className={styles.loginPageHeader}>
        <div className={styles.loginPageHeaderTitle}>
          Log in to your account
        </div>
        <div className={styles.loginPageHeaderSubtitle}>
          Enter your details below
        </div>
      </header>
      <div className={styles.loginPageInputFields}>
        <input
          type="email"
          placeholder="Email"
          className={styles.emailLabel}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.passwordLabel}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.loginPageActionContainer}>
        <Button type="submit" variant="confirm">
          Log In
        </Button>
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
