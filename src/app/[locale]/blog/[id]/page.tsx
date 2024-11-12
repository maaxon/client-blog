import { BlogPost } from "@/components/blog-post";
import { JoinOurTeamBanner } from "@/components/join-our-team-banner";
import { RelatedPosts } from "@/components/related-posts";

import styles from "./page.module.scss";

interface BlogPageProps {
  params: Promise<{ id: string; }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const {id} = await params;
  return (
    <div className={styles.page}>
      <BlogPost id={id} />
      <RelatedPosts id={id} />
      <JoinOurTeamBanner />
    </div>
  );
}