import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { NavLink } from "@/components/nav-link";
import { Link } from "@/i18n/routing";
import { getRelatedPosts } from "@/services/posts/get-related-posts";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./related-posts.module.scss";
import { RelatedPostsProps } from "./related-posts.type";

export const RelatedPosts = async ({ id }: RelatedPostsProps) => {
  const t = await getTranslations("PostsBanner");
  const locale = await getLocale();

  const posts = getRelatedPosts(id);

  return (
    <div className={styles.container}>
      <h2 className={typography.Heading2}>{t("related-posts-title")}</h2>
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
                  <NavLink
                    className={styles.author}
                    href={`/author/${author.id}`}
                  >
                    {author.name}
                  </NavLink>
                  {t("separator")}
                  <span>{formattedDate(new Date(publish_date), locale)}</span>
                </p>
                <h3 className={typography.Heading3}>{title}</h3>
                <p className={`${typography.body1}`}>{description}</p>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};
