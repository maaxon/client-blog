import { LinkProps } from "next/link";

export interface IconLinkProps extends LinkProps{
  className?: string;
  alt: string;
  icon: string;
}
