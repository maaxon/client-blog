import classNames from "classnames";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./nav-link.module.scss";
import { LinkProps } from "./nav-link.type";

export const NavLink = ({ className, href, children }: LinkProps) => (
  <Link
    href={href}
    className={classNames(typography.body1, styles.link, className)}
  >
    {children}
  </Link>
);
