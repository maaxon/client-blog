import classNames from "classnames";

import { CATEGORIES } from "@/constants/categories";
import typography from "@/styles/typography.module.scss";

import styles from "./category-banner.module.scss";
import { CategoryBannerProps } from "./category-banner.type";

export const CategoryBanner = ({ category }: CategoryBannerProps) => (
  <div className={styles.container}>
    <h1 className={classNames(typography.display, styles.title)} data-testid="category-title">{category}</h1>
    <p className={classNames(typography.body1, styles.description)}>
      {CATEGORIES[category].description}
    </p>
    <p className={classNames(typography.cap3)}>{`blog > ${category}`}</p>
  </div>
);
