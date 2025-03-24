import React from "react";
import { Link } from "react-router";
import styles from "../css/Button.module.css";

type LinkButtonProps = {
  to: string;
  variant?: "confirm" | "navigation" | "danger";
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Link>;

type RegularButtonProps = {
  to?: undefined;
  variant?: "confirm" | "navigation" | "danger";
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

type ButtonProps = LinkButtonProps | RegularButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "confirm", children } = props;

  const className = `${styles.button} ${
    variant === "confirm"
      ? styles.confirm
      : variant === "navigation"
      ? styles.navigation
      : styles.danger
  }`;

  if ("to" in props && props.to) {
    const { to, ...rest } = props as LinkButtonProps;
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  } else {
    const { ...rest } = props as RegularButtonProps;
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
