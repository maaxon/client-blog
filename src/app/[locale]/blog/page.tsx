import { BlogBanner } from "@/components/blog-banner";
import { CategorySelector } from "@/components/category-selector/category-selector";
import { JoinOurTeamBanner } from "@/components/join-our-team-banner/join-our-team-banner";
import typography from "@/styles/typography.module.scss"

import styles from "./page.module.scss"
import classNames from "classnames";
import { PostList } from "@/components/post-list";

export default async function BlogPage() {
  return (
    <>
      <BlogBanner/>
      <main className={styles.container}>
          <h2 className={classNames(typography.Heading1,styles.title)}>All posts</h2>
          <PostList/>
      </main>
      <CategorySelector/>
      <JoinOurTeamBanner/>
    </>
  );
}