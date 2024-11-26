import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/button/";
import { NavLink } from "@/components/nav-link";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./home-banner.module.scss";

export const HomeBanner = async () => {
  const t = await getTranslations("FeaturePost");
  const locale = await getLocale();


  return (
    <section className={styles.container}>
      <Image
        className={styles.image}
        alt={t("banner-image.alt")}
        src={"https://images.pexels.com/photos/3772622/pexels-photo-3772622.jpeg"}
        fill
        priority
      />
      <div className={styles.overlay}></div>
      <article className={styles.content}>
        <p className={`${typography.cap}`}>
          {t("posted-on")}
          <span className={styles.category}>{"education"}</span>
        </p>
        <h1 className={`${typography.display} ${styles.title}`}>
          {"How to renovate the front"}
        </h1>
        <p className={`${typography.body1} ${styles.metaInfo}`}>
          {t("by")}
          <NavLink className={styles.author} href={`/author/1`}>
            senderer
          </NavLink>
          {t("separator")}
          <span>{formattedDate(new Date(2024,10,22), locale)}</span>
        </p>
        <p className={`${typography.body1} ${styles.description}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae consectetur doloribus excepturi facilis fugiat laborum mollitia nam provident reprehenderit saepe, sequi temporibus, veritatis, vitae voluptatem! Ab adipisci non quaerat.
        </p>
        <Button className={styles.button} href={`/blog/1`}>
          {t("button")}
        </Button>
      </article>
    </section>
  );
};
