import styles from "../../css/Components-css/MyAccountCSS/TextInputComponent.module.css";

interface TextInputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

const TextInput = ({ label, type = "text", placeholder }: TextInputProps) => (
  <div className={styles.inputGroup}>
    <span className={styles.inputLabel}>{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className={styles.inputField}
    />
  </div>
);

export default TextInput;
