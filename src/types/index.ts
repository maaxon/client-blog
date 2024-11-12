import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Author {
  id: string;

  name: string;
  avatar: {
    src: string | StaticImport;
    alt: string;
  };

  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  linkedin: string | null;

  description: string;

  page: {
    title: string;
    description: string;
  };
}


export interface BlogContentBlock {
  type: "heading" | "paragraph";
  text: string;
}

export interface Blog {
  id: string;
  author: Author;
  publish_date: Date;
  category: Category;
  title: string;
  title_image: string;
  description: string;
  content: BlogContentBlock[];
  tags: string[];
}


export enum categories {
  Startup = "startup",
  Business = "business",
  Economy = "economy",
  Technology = "technology",
}

export type Category =
  | categories.Startup
  | categories.Business
  | categories.Economy
  | categories.Technology;


export interface PostResponse{
  posts: Blog[],
  hasMore: boolean
}

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};