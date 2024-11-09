import { Blog } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getPostsByCategory = async (category: string,tags: string[],search: string,url?:string) => {
  try {
    const baseUrl = url || getBaseUrl();

    const response = await fetch(`${baseUrl}/api/posts/category/${category}?tags=${tags.join(',')},${search}`);
    const posts: Blog[] = await response.json();

    return posts;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};