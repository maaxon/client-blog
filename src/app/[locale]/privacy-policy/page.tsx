import { getTranslations } from "next-intl/server";
import classNames from "classnames";

import typography from "@/styles/typography.module.scss";

import styles from "./page.module.scss";

export default async function PrivacyPolicy() {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <h1 className={classNames(typography.Display, styles.bannerTitle)}>
          {t("banner.title")}
        </h1>
        <p className={classNames(typography.body1, styles.bannerDescription)}>
          {t("banner.last-updated")}
        </p>
      </div>
      <div className={styles.container}>
        <h1 className={typography.Heading1}>{t("content.section-1.title")}</h1>
        <p className={classNames(typography.body1, styles.text)}>
          {t("content.section-1.description")}
        </p>
        <h2 className={typography.Heading2}>{t("content.section-2.title")}</h2>
        <p className={classNames(typography.body1, styles.text)}>
          {t("content.section-2.description-1")}
        </p>
        <p className={classNames(typography.body1, styles.text)}>
          {t("content.section-2.description-2")}
        </p>
      </div>
    </div>
  );
}
