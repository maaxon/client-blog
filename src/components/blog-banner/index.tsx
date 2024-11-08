import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/button/button";
import { NavLink } from "@/components/nav-link/nav-link";
import { getFeaturedPost } from "@/services/posts/get-featured-post";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./blog-banner.module.scss";

export async function BlogBanner() {
  const t = await getTranslations("FeaturePost");
  const locale = await getLocale();

  const post = await getFeaturedPost();

  return (
    <section className={styles.container}>
      <article className={styles.content}>
        <p className={`${typography.cap}`}>
          {t("featured-post")}
        </p>
        <h1 className={`${typography.Heading2} ${styles.title}`}>
          {post.title}
        </h1>
        <p className={`${typography.body1} ${styles.metaInfo}`}>
          {t("by")}
          <NavLink className={styles.author} href={`/author/${post.author.id}`}>
            {post.author.name}
          </NavLink>
          {t("separator")}
          <span>{formattedDate(post.publish_date, locale)}</span>
        </p>
        <p className={`${typography.body1} ${styles.description}`}>
          {post.description}
        </p>
        <Button className={styles.button} href={`/blog/${post.id}`}>
          {t("button")}
        </Button>
      </article>
      <section className={styles.imageContainer}>
        <Image className={styles.image} src={post.title_image} alt="title_image" fill />
      </section>
    </section>
  );
}