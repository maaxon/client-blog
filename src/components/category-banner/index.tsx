import cn from "classnames";

import { CATEGORIES } from "@/constants/categories";
import typography from "@/styles/typography.module.scss";

import styles from "./style.module.scss";
import { CategoryBannerProps } from "./types";

export const CategoryBanner = ({ category }: CategoryBannerProps) => (
  <div className={styles.container}>
    <h1 className={cn(typography.display, styles.title)} data-testid="category-title">{category}</h1>
    <p className={cn(typography.body1, styles.description)}>
      {CATEGORIES[category].description}
    </p>
    <p className={cn(typography.cap3)}>{`blog > ${category}`}</p>
  </div>
);
