import styles from "../../css/Components-css/Register+LoginCSS/RegisterComponent.module.css";
import Button from "../ButtonComponent";
import { Link } from "react-router";
import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerUser } from "../../store/userSlice";
import type { AppDispatch } from "../../store/store";

const RegisterComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }))
      .unwrap()
      .then(() => {
        toast.success(
          "Account created successfully! Please confirm your account via email."
        );
        navigate("/login");
      })
      .catch((error: any) => {
        toast.error(`Registration failed: ${error}`);
      });
  };

  return (
    <form className={styles.registerPageForm} onSubmit={handleSubmit}>
      <header className={styles.registerPageHeader}>
        <div className={styles.registerPageHeaderTitle}>Create an account</div>
        <div className={styles.registerPageHeaderSubtitle}>
          Enter your details below
        </div>
      </header>
      <div className={styles.registerPageInputFields}>
        <>
          <input
            type="text"
            placeholder="Name"
            className={styles.nameLabel}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.emailLabel}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.passwordLabel}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </>
      </div>
      <div className={styles.registerPageActionContainer}>
        <Button type="submit" variant="confirm">
          Create Account
        </Button>
        <div className={styles.registerPageAlternateActionContainer}>
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
