import Image from "next/image";
import { getTranslations } from "next-intl/server";

import typography from "@/styles/typography.module.scss";

import styles from "./style.module.scss";
import { Banners } from "@/components/featured-in-banner/config";

export const FeaturedInBanner = async () => {
  const t = await getTranslations("FeaturedIn");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={`${typography.body2} ${styles.textTop}`}>
          {t("text-top")}
        </p>
        <h4 className={typography.heading4}>{t("text-bottom")}</h4>
      </div>
      {Banners.map(({ src, alt }) => <Image key={alt} src={src} alt={t(alt)}/>)}
    </div>
  );
};
