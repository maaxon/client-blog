import Image from "next/image";
import { getLocale } from "next-intl/server";
import classNames from "classnames";

import { NavLink } from "@/components/nav-link";
import { CATEGORIES } from "@/constants/categories";
import { BlockType } from "@/constants/text-block";
import { getPostById } from "@/services/posts/get-post-by-id";
import typography from "@/styles/typography.module.scss";
import { formattedDate } from "@/utils/format-date";

import styles from "./blog-post.module.scss";
import { BlogPostProps } from "./blog-post.types";

export const BlogPost = async ({ id }: BlogPostProps) => {
  const post = getPostById(id);
  const locale = await getLocale();

  if(!post) return <h1>Post not found</h1>

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.profile}>
            <div className={styles.avatarWrapper}>
              <Image
                src={post.author.avatar.src}
                alt={post.author.avatar.alt}
                className={styles.avatar}
                fill
              />
            </div>
            <div className={styles.profileText}>
              <NavLink
                href={`/author/${post.author.id}`}
                className={classNames(typography.Heading3, styles.authorName)}
              >
                {post.author.name}
              </NavLink>
              <p className={classNames(typography.body1, styles.publishDate)}>
                {formattedDate(post.publish_date, locale)}
              </p>
            </div>
          </div>
          <h1 className={typography.Heading1} data-testid="blog-post-title">{post.title}</h1>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryIconWrapper}>
            <Image
              src={CATEGORIES[`${post.category}`].icon}
              alt="Category icon"
              className={styles.avatar}
              fill
            />
          </div>
          <h4 className={typography.Heading4}>{post.category}</h4>
        </div>
      </div>
      <div className={styles.titleImageWrapper}>
        <Image
          src={post.title_image}
          alt="Title image"
          className={styles.avatar}
          fill
        />
      </div>
      <div className={styles.content}>
        {post.content.map((block, index) => {
          if (block.type === BlockType.HEADING) {
            return (
              <h2 key={index} className={typography.Heading2}>
                {block.text}
              </h2>
            );
          }
          if (block.type === BlockType.PARAGRAPH) {
            return (
              <p key={index} className={typography.body1}>
                {block.text}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};
