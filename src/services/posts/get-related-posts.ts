import { Blog } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getRelatedPosts = async (id:string,url?:string) => {
  try {
    const baseUrl = url || getBaseUrl();
    const response = await fetch(`${baseUrl}/api/posts/related/${id}`);

    const posts: Blog[] = await response.json();

    return posts;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};