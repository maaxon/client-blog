import { PostResponse } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getFirstFourPosts = async () => {
  try {
    const baseUrl = getBaseUrl();

    const response = await fetch(`${baseUrl}/api/posts?limit=4`);
    const data: PostResponse = await response.json();

    return data.posts;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};