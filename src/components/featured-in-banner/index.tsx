import Image from "next/image";
import { getTranslations } from "next-intl/server";

import typography from "@/styles/typography.module.scss";
import Logo1 from "@public/icons/partners/logo-1.svg";
import Logo2 from "@public/icons/partners/logo-2.svg";
import Logo3 from "@public/icons/partners/logo-3.svg";
import Logo4 from "@public/icons/partners/logo-4.svg";
import Logo5 from "@public/icons/partners/logo-5.svg";

import styles from "./featured-in-banner.module.scss";

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
      <Image alt={t("logo-1.alt")} src={Logo1} />
      <Image alt={t("logo-2.alt")} src={Logo2} />
      <Image alt={t("logo-3.alt")} src={Logo3} />
      <Image alt={t("logo-4.alt")} src={Logo4} />
      <Image alt={t("logo-5.alt")} src={Logo5} />
    </div>
  );
};
