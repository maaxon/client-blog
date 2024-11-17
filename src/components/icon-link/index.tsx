import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./icon-link.module.scss";
import { IconLinkProps } from "./icon-link.type";

export const IconLink = ({ href, icon, className, alt }: IconLinkProps) => (
  <Link href={href} className={`${styles.iconLink} ${className}`}>
    <Image alt={alt} src={icon} />
  </Link>
);
