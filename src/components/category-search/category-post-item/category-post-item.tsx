import Image from "next/image";

import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import styles from "./category-post-item.module.scss";
import { CategoryPostItemProps } from "./category-post-item.type";

export const CategoryPostItem = ({
  category,
  description,
  id,
  image,
  title,
}: CategoryPostItemProps) => (
  <Link className={styles.card} href={`/blog/${id}`}>
    <div className={styles.imageWrapper}>
      <Image
        className={styles.image}
        alt={`Post image ${id}`}
        src={image}
        fill
      />
    </div>
    <div className={styles.content}>
      <p className={typography.cap}>{category}</p>
      <div className={styles.text}>
        <h2 className={typography.heading2}>{title}</h2>
        <p className={typography.body1}>{description}</p>
      </div>
    </div>
  </Link>
);
