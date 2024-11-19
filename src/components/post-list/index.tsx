"use client";

import { useTranslations } from "next-intl";

import { Loader } from "@/components/loader";
import { PostCard } from "@/components/post-card";
import { usePagePosts } from "@/hooks/use-page-posts/use-page-posts";
import typography from "@/styles/typography.module.scss";

import styles from "./post-list.module.scss";

export function PostList() {
  const { posts, isLoading, nextPage, prevPage, isDisabledNext, isDisabledPrev } = usePagePosts();
  const t = useTranslations("PostsBanner");

  return (
    <section className={styles.container}>
      {isLoading &&
        <section className={styles.loaderContainer}><Loader/></section>
      }
      {posts && posts.map(({ id, title, title_image, description, category }) =>
        <PostCard key={id} id={id} title={title} description={description} image={title_image} category={category} />
      )}
      <section className={styles.pagination}>
        <button
          className={`${typography.Heading4} ${styles.navButton}`}
          disabled={isDisabledPrev()}
          onClick={prevPage}
          data-testid="prev"
        >
          {t("prev")}
        </button>
        <button
          className={`${typography.Heading4} ${styles.navButton}`}
          disabled={isDisabledNext()}
          onClick={nextPage}
          data-testid="next"
        >
          {t("next")}
        </button>
      </section>
    </section>
  );
}