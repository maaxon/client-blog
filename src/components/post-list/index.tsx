"use client";

import { useTranslations } from "next-intl";

import { Loader } from "@/components/loader/loader";
import { PostCard } from "@/components/post-card/post-card";
import { usePagePosts } from "@/hooks/use-page-posts/use-page-posts";
import typography from "@/styles/typography.module.scss";

import styles from "./post-list.module.scss";

export function PostList() {
  const { posts, isLoading, nextPage, prevPage, isDisabledNext, isDisabledPrev } = usePagePosts();
  const t = useTranslations("PostsBanner");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={styles.container}>
      {posts.map(({ id, title, title_image, description, category }) =>
        <PostCard key={id} id={id} title={title} description={description} image={title_image} category={category} />)}
      <section className={styles.pagination}>
        <button
          className={`${typography.Heading4} ${styles.navButton}`}
          disabled={isDisabledPrev()}
          onClick={prevPage}
        >
          {t("prev")}
        </button>
        <button
          className={`${typography.Heading4} ${styles.navButton}`}
          disabled={isDisabledNext()}
          onClick={nextPage}
        >
          {t("next")}
        </button>
      </section>
    </section>
  );
}