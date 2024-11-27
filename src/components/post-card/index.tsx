import Image from "next/image";
import cn from "classnames";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./style.module.scss";
import { PostCardProps } from "./types";

export function PostCard({ id, title, description, image, category }: PostCardProps) {
  return (
    <Link href={`/blog/${id}`} data-testid="post-card">
      <section className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt="post-image" className={styles.image} fill />
        </div>
        <div className={styles.content}>
          <p className={cn(typography.cap, styles.category)}>{category.toUpperCase()}</p>
          <h4 className={typography.heading2} data-testid="post-title">{title}</h4>
          <p>{description}</p>
        </div>
      </section>
    </Link>
  );
}