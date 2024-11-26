import { Blog } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getPostById = async (id: string) => {

  try {
    const baseUrl = getBaseUrl();

    const response = await fetch(`${baseUrl}/api/posts/${id}`);
    const post: Blog = await response.json();

    return post;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};

