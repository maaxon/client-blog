import { getTranslations } from "next-intl/server";
import cn from "classnames";

import { PostCard } from "@/components/post-card";
import { getPostsByAuthorId } from "@/services/posts/get-posts-by-author-id";
import typography from "@/styles/typography.module.scss";

import styles from "./style.module.scss";
import { ListOfAuthorPostsProps } from "./types";

export const ListOfAuthorPosts = async ({ id }: ListOfAuthorPostsProps) => {
  const t = await getTranslations("AuthorPosts");

  const posts = await getPostsByAuthorId(id);

  return posts.length !== 0 ? (
    <div className={styles.container}>
      <h1 className={cn(typography.heading1, styles.title)}>
        {t("title")}
      </h1>
      <div className={styles.list}>
        {posts.map(({ id, title_image, title, category, description }) => (
          <PostCard key={id} id={id} title={title} description={description} image={title_image} category={category}/>
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.placeholderContainer}>
      <h1 className={typography.heading2}>{t("placeholder")}</h1>
    </div>
  );
};
