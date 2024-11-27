import { Category } from "@/types";

export interface CategorySearchProps {
  category: Category;
}

export interface CategorySearchState {
  tagValue: string,
  selectedTags: string[]
}

