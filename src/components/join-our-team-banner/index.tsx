import { getTranslations } from "next-intl/server";

import { Button } from "@/components/button/";
import typography from "@/styles/typography.module.scss";

import styles from "./join-our-team-banner.module.scss";

export const JoinOurTeamBanner = async () => {
  const t = await getTranslations("JoinOurTeam");

  return (
    <div className={styles.banner}>
      <h4 className={`${typography.Heading2} ${styles.title}`}>{t("title")}</h4>
      <p className={`${typography.body1} ${styles.text}`}>{t("text")}</p>
      <Button className={styles.button} href={"/contact-us"}>
        {t("button")}
      </Button>
    </div>
  );
};
