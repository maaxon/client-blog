import { Blog } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getFeaturedPost = async (url?:string) => {
  try {
    const baseUrl = url || getBaseUrl();

    const response = await fetch(`${baseUrl}/api/posts/featured-post`);
    const post: Blog = await response.json();

    return post;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};