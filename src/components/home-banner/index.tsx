import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/button";
import { getFeaturedPost } from "@/services/posts/get-featured-post";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./home-banner.module.scss";

export const HomeBanner = async () => {
  const t = await getTranslations("FeaturePost");
  const locale = await getLocale();

  const post = await getFeaturedPost();

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        alt={t("banner-image.alt")}
        src={post.title_image}
        fill
        priority
      />
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={`${typography.cap}`}>
          {t("posted-on")}
          <span className={styles.category}>{post.category}</span>
        </p>

        <h1 className={`${typography.Display} ${styles.title}`}>
          {post.title}
        </h1>

        <p className={`${typography.body1} ${styles.metaInfo}`}>
          {t("by")}
          <span className={styles.author}>
            {post.author.name}
          </span>
          {t("separator")}
          <span>{formattedDate(new Date(post.publish_date), locale)}</span>
        </p>

        <p className={`${typography.body1} ${styles.description}`}>
          {post.description}
        </p>

        <Button className={styles.button} href={`/blog/${post.id}`}>
          {t("button")}
        </Button>
      </div>
    </div>
  );
};