import React, { forwardRef } from "react";

import typography from "@/styles/typography.module.scss";

import styles from "./form-input.module.scss";
import { FormInputProps } from "./types";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, onChange, onBlur, value, placeholder, type, ...rest }, ref) => (
    <input
      ref={ref}
      className={`${typography.body1} ${styles.input} ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
  ),
);

FormInput.displayName = "FormInput";
