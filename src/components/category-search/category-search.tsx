"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import { FormInput } from "@/components/form-input/form-input";
import { Loader } from "@/components/loader/loader";
import { categories } from "@/constants/categories.constant";
import { tags } from "@/constants/tags.constatn";
import { getPostsByCategory } from "@/services/posts/get-posts-by-category";
import typography from "@/styles/typography.module.scss";
import { Blog } from "@/types";

import { CategoryItem } from "./category-item/category-item";
import { CategoryPostItem } from "./category-post-item/category-post-item";
import styles from "./category-search.module.scss";
import { CategorySearchProps } from "./category-search.type";
import { useService } from "@/hooks/use-service/use-service";
import { useDebounce } from "@/hooks/use-debounce/use-debounce";

export const CategorySearch = ({ category }: CategorySearchProps) => {
  const [tagValue, setTagValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const t = useTranslations("CategoryPage");
  const debouncedTagValue = useDebounce(tagValue,500)

  const { data: posts, isLoading } = useService(getPostsByCategory, [category, selectedTags,debouncedTagValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag],
    );
  };

  const handleTagSelected = (tag: tags) => () => {
    toggleTag(tag);
  };

  const isSelected = (tag: string) => selectedTags.includes(tag);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {isLoading &&
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        }
        {posts && posts.length === 0 ? (
          <div className={styles.placeholder}>
            <p className={typography.Heading3}>{t("placeholder.message")}</p>
          </div>
        ) : (
          posts && posts.map(({ id, title_image, title, description, category }) => (
            <CategoryPostItem
              key={id}
              id={id}
              image={title_image}
              title={title}
              description={description}
              category={category}
            />
          ))
        )}
      </div>

      <div className={styles.filterPanel}>
        <div className={styles.searchContainer}>
          <FormInput
            onChange={handleInputChange}
            type="text"
            value={tagValue}
            placeholder={t("tags.placeholder")}
            className={styles.search}
          />
        </div>
        <div className={styles.categoryList}>
          <h2 className={typography.Heading2}>{t("categories.title")}</h2>
          <div className={styles.categoryList}>
            {Object.entries(categories).map(([categoryKey, { icon }]) => (
              <CategoryItem
                key={categoryKey}
                categoryKey={categoryKey}
                icon={icon}
              />
            ))}
          </div>
        </div>
        <div className={styles.categoryList}>
          <h2 className={typography.Heading2}>{t("tags.title")}</h2>
          <div className={styles.tagList}>
            {Object.values(tags).map((tag) => (
              <div
                key={tag}
                className={classNames(
                  typography.body2,
                  styles.tagItem,
                  isSelected(tag) && styles.selectedTag,
                )}
                onClick={handleTagSelected(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
