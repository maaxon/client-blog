import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/button/button";
import { NavLink } from "@/components/nav-link/nav-link";
import { Link } from "@/i18n/routing";
import { mocks } from "@/mocks";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./posts-banner.module.scss";

export const PostsBanner = async () => {
  const t = await getTranslations("PostsBanner");
  const locale = await getLocale();

  const posts = mocks.posts.slice(4);
  const post = mocks.featured_posts;

  return (
    <div className={styles.container}>
      <div className={styles.featuredContainer}>
        <div className={styles.featuredHeader}>
          <h3 className={typography.Heading2}>{t("feature-post.title")}</h3>
        </div>
        <div className={styles.featuredPost}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              alt={t("feature-post.image.alt")}
              src={post.title_image}
              fill
            />
          </div>
          <div className={styles.featuredContent}>
            <p className={`${typography.label} ${styles.metaInfo}`}>
              {t("by")}
              <NavLink
                className={styles.author}
                href={`/author/${post.author.id}`}
              >
                {post.author.name}
              </NavLink>
              {t("separator")}
              <span>{formattedDate(post.publish_date, locale)}</span>
            </p>
            <h4 className={typography.Heading3}>Test title</h4>
            <p className={`${typography.body1} ${styles.description}`}>
              {post.description}
            </p>
          </div>
          <Button href={`/blog/${post.id}`}>
            {t("feature-post.button.title")}
          </Button>
        </div>
      </div>
      <div className={styles.allContainer}>
        <div className={styles.allHeader}>
          <h3 className={typography.Heading2}>{t("all-posts.title")}</h3>
          <NavLink
            className={`${typography.body1} ${styles.link}`}
            href={t("all-posts.link.href")}
          >
            {t("all-posts.link.title")}
          </NavLink>
        </div>
        <div className={styles.allPosts}>
          {posts.map(({ id, author, title, publish_date }) => (
            <Link key={id} className={styles.allItem} href={`/blog/${id}`}>
              <p className={`${typography.label} ${styles.metaInfo}`}> {t("by")}
                <span
                  className={styles.author}
                >
                  {author.name}
                </span>
                {t("separator")}
                <span>{formattedDate(publish_date, locale)}</span>
              </p>
              <h5 className={typography.Heading4}>{title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
