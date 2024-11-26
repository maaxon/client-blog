import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { CATEGORIES } from "@/constants/categories";
import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./category-selector.module.scss";

export const CategorySelector = async () => {
  const t = await getTranslations("CategorySelector");

  return (
    <div className={styles.container}>
      <h3 className={typography.heading2}>{t("title")}</h3>
      <div className={styles.content}>
        {Object.entries(CATEGORIES).map(([category, { icon }]) => (
          <Link
            className={styles.card}
            key={category}
            href={`/category/${category}`}
          >
            <div className={styles.iconWrapper}>
              <Image src={icon} alt={t(`${category}.icon.alt`)} />
            </div>
            <div className={styles.text}>
              <h3 className={typography.heading3}>{t(`${category}.title`)}</h3>
              <p className={`${typography.body1} ${styles.description}`}>
                {t(`${category}.description`)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
