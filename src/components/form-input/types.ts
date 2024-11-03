import React from "react";

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  ref?: React.Ref<HTMLInputElement>;
  type: "email" | "text";
  className?: string;
  placeholder?: string;
};
