import { AuthorBanner } from "@/components/author-banner";
import { ListOfAuthorPosts } from "@/components/list-of-author-posts";

import styles from "./page.module.scss";
import { AuthorProps } from "./types";

export default function Author({ params }: AuthorProps) {
  return (
    <div className={styles.page}>
      <AuthorBanner id={params.id} />
      <ListOfAuthorPosts id={params.id} />
    </div>
  );
}
