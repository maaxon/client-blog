import { PostResponse } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

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