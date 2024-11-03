import { getTranslations } from "next-intl/server";

import { NavLink } from "@/components/nav-link/nav-link";
import typography from "@/styles/typography.module.scss";

import styles from "./home-about-us-banner.module.scss";

export const HomeAboutUsBanner = async () => {
  const t = await getTranslations("AboutUsBanner");

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.yellowBar} />
        <div className={styles.purpleBar} />
      </div>

      <div className={styles.content}>
        <div className={`${styles.section}`}>
          <p className={`${typography.cap} ${styles.heading}`}>
            {t("about-us.heading")}
          </p>
          <h2 className={`${typography.Heading2}`}>{t("about-us.title")}</h2>
          <p className={`${typography.body1} ${styles.description}`}>
            {t("about-us.description")}
          </p>
          <NavLink href={t("about-us.link.href")} className={styles.link}>
            {t("about-us.link.title")}
          </NavLink>
        </div>

        <div className={`${styles.section}`}>
          <p className={`${typography.cap} ${styles.heading}`}>
            {t("our-mission.heading")}
          </p>
          <h3 className={`${typography.Heading3}`}>{t("our-mission.title")}</h3>
          <p className={`${typography.body1} ${styles.description}`}>
            {t("our-mission.description")}
          </p>
        </div>
      </div>
    </div>
  );
};
