"use client";

import React, { useRef } from "react";

import typography from "@/styles/typography.module.scss";

import styles from "./style.module.scss";
import { FormTextAreaProps } from "./types";

export const FormTextArea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextAreaProps
>(({ className, onChange, onBlur, value, placeholder, ...rest }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null);
  const textareaRef =
    (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;


  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
  };

  return (
    <textarea
      ref={textareaRef}
      className={`${typography.body1} ${styles.textarea} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      onBlur={onBlur}
      {...rest}
    />
  );
});

FormTextArea.displayName = "FormTextArea";
