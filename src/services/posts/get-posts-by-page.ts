import { Blog } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

interface PostResponse{
  posts: Blog[],
  hasMore: boolean
}

export const getPostsByPage = async (page: number) => {
  try {
    const baseUrl = getBaseUrl();

    const response = await fetch(`${baseUrl}/api/posts?limit=5&page=${page}`);
    const posts: PostResponse = await response.json();

    return posts;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};