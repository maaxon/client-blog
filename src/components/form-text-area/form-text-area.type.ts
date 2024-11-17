import React from "react";

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
  className?: string;
  placeholder?: string;
}
