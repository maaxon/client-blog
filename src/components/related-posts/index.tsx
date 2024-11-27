import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/routing";
import { getRelatedPosts } from "@/services/posts/get-related-posts";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./style.module.scss";
import { RelatedPostsProps } from "./types";

export const RelatedPosts = async ({ id }: RelatedPostsProps) => {
  const t = await getTranslations("PostsBanner");
  const locale = await getLocale();

  const posts = await getRelatedPosts(id);

  if (posts.length === 0) return null;

  return (
    <div className={styles.container}>
      <h2 className={typography.heading2}>{t("related-posts-title")}</h2>
      <div className={styles.content}>
        {posts.map(
          ({ id, title_image, author, publish_date, title, description }) => (
            <Link className={styles.card} key={id} href={`/blog/${id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={title_image}
                  alt="Related post image"
                  className={styles.image}
                  fill
                />
              </div>
              <div className={styles.textContainer}>
                {" "}
                <p className={`${typography.body1} ${styles.metaInfo}`}>
                  {t("by")}
                  <span
                    className={styles.author}
                  >
                    {author.name}
                  </span>
                  {t("separator")}
                  <span>{formattedDate(new Date(publish_date), locale)}</span>
                </p>
                <h3 className={typography.heading3}>{title}</h3>
                <p className={`${typography.body1}`}>{description}</p>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};
