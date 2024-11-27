import cn from "classnames";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./style.module.scss";
import { NavLinkProps } from "./types.type";

export const NavLink = ({ className, href, children }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(typography.body1, styles.link, className)}
  >
    {children}
  </Link>
);
