import Image from "next/image";
import classNames from "classnames";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./post-card.module.scss";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export function PostCard({ id, title, description, image, category }: PostCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <section className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt="post-image" className={styles.image} fill />
        </div>
        <div className={styles.content}>
          <p className={classNames(typography.cap, styles.category)}>{category.toUpperCase()}</p>
          <h4 className={typography.Heading2}>{title}</h4>
          <p>{description}</p>
        </div>
      </section>
    </Link>
  );
}