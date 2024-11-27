import { LinkProps } from "next/link";

export interface NavLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
}
