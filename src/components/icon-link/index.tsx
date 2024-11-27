import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./style.module.scss";
import { IconLinkProps } from "./types";

export const IconLink = ({ href, icon, className, alt }: IconLinkProps) => (
  <Link href={href} className={`${styles.iconLink} ${className}`}>
    <Image alt={alt} src={icon} />
  </Link>
);
