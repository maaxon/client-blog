"use client";

import cn from "classnames";

import typography from "@/styles/typography.module.scss";

import styles from "./page.module.scss";

export default function Error() {
  return (
    <div className={cn(styles.page,styles.flexCenter)}>
      <h1 className={typography.heading1}>Something went wrong</h1>
    </div>);
}