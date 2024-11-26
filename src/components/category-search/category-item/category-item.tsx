"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import cn from "classnames";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./category-item.module.scss";
import { CategoryItemProps } from "./category-item.type";

export const CategoryItem = ({ categoryKey, icon }: CategoryItemProps) => {
  const t = useTranslations("CategorySelector");
  const { category } = useParams<{ category: string }>();

  return (
    <Link
      className={cn(styles.card, { [styles.active]: category === categoryKey })}
      href={`/category/${categoryKey}`}
      key={categoryKey}
    >
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={t(`${categoryKey}.icon.alt`)} />
      </div>
      <div className={styles.text}>
        <h3 className={typography.Heading3} data-testid="category-link">{t(`${categoryKey}.title`)}</h3>
      </div>
    </Link>
  );
};
