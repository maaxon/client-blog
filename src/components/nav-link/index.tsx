import classNames from "classnames";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./nav-link.module.scss";
import { NavLinkProps } from "./nav-link.type";

export const NavLink = ({ className, href, children }: NavLinkProps) => (
  <Link
    href={href}
    className={classNames(typography.body1, styles.link, className)}
  >
    {children}
  </Link>
);
