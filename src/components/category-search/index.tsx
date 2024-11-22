"use client";

import { ChangeEvent, useState } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import { FormInput } from "@/components/form-input";
import { Loader } from "@/components/loader";
import { categories } from "@/constants/categories.constant";
import { tags } from "@/constants/tags.constatn";
import { useDebounce } from "@/hooks/use-debounce/use-debounce";
import { useService } from "@/hooks/use-service/use-service";
import { getPostsByCategory } from "@/services/posts/get-posts-by-category";
import typography from "@/styles/typography.module.scss";

import { CategoryItem } from "./category-item/category-item";
import { CategoryPostItem } from "./category-post-item/category-post-item";
import styles from "./category-search.module.scss";
import { CategorySearchProps, CategorySearchState } from "./category-search.type";

export const CategorySearch = ({ category }: CategorySearchProps) => {
  const [{ tagValue, selectedTags }, setState] = useState<CategorySearchState>({
    tagValue: "",
    selectedTags: [],
  });
  const debouncedTagValue = useDebounce(tagValue, 500);
  const { data: posts, isLoading } = useService(getPostsByCategory,
    [category, selectedTags, debouncedTagValue, window.location.origin]);

  const t = useTranslations("CategoryPage");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({ ...prevState, tagValue: e.target.value }));
  };

  const toggleTag = (tag: string) => {
    setState((prevState) =>{
          const {selectedTags: prevTags} = prevState;
          const selectedTags = prevTags.includes(tag)
            ? prevTags.filter((t) => t !== tag)
            : [...prevTags, tag]
          return {...prevState, selectedTags};
      }
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
          <div className={styles.loaderContainer} data-testid="loader">
            <Loader />
          </div>
        }
        {posts && posts.length === 0 &&
          <div className={styles.placeholder}>
            <p className={typography.Heading3} data-testid="no-posts">{t("placeholder.message")}</p>
          </div>
        }
        {posts && posts.map(({ id, title_image, title, description, category }) => (
          <CategoryPostItem
            key={id}
            id={id}
            image={title_image}
            title={title}
            description={description}
            category={category}
          />))
        }
      </div>

      <div className={styles.filterPanel}>
        <div className={styles.searchContainer}>
          <FormInput
            onChange={handleInputChange}
            type="text"
            value={tagValue}
            placeholder={t("tags.placeholder")}
            className={styles.search}
            data-testid="search-input"
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
