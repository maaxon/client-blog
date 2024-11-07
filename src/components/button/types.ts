export type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
};
