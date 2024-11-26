import { ButtonHTMLAttributes } from "react";

import { Link } from "@/i18n/routing";

import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}


export const Button = ({
  onClick,
  children,
  className,
  href,
  type,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};
