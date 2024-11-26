import { BlogPost } from "@/components/blog-post";
import { JoinOurTeamBanner } from "@/components/join-our-team-banner";
import { RelatedPosts } from "@/components/related-posts";
import { getAllPosts } from "@/services/posts/get-all-posts";
import { Blog } from "@/types";

import styles from "./page.module.scss";

interface BlogPageProps {
  params: { id: string; };
}

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const posts: Blog[] = await getAllPosts();
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = params;

  return (
    <div className={styles.page}>
      <BlogPost id={id} />
      <RelatedPosts id={id} />
      <JoinOurTeamBanner />
    </div>
  );
}