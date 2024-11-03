import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/button/button";
import typography from "@/styles/typography.module.scss";
import BannerImage from "@public/images/why-we-started-image.png";

import styles from "./why-we-started-banner.module.scss";

export const WhyWeStartedBanner = async () => {
  const t = await getTranslations("WhyWeStartedBanner");

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={BannerImage}
          alt={t("image.alt")}
          className={styles.image}
          fill
        />
      </div>

      <div className={styles.content}>
        <p className={typography.cap}>{t("header")}</p>
        <div className={styles.text}>
          <h1 className={typography.Heading1}>{t("title")}</h1>
          <p className={`${typography.body01} ${styles.description}`}>
            {t("description")}
          </p>
        </div>
        <Button href="/about-us">{t("button.title")}</Button>
      </div>
    </div>
  );
};
