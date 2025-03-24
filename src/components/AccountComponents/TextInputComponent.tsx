import { ChangeEvent } from "react";
import styles from "../../css/Components-css/MyAccountCSS/TextInputComponent.module.css";

interface TextInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: TextInputProps) => (
  <div className={styles.inputGroup}>
    <span className={styles.inputLabel}>{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.inputField}
    />
  </div>
);

export default TextInput;
