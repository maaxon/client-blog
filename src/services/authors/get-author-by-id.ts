import { Author } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getAuthorById = async (id: string) => {
  try {
    const baseUrl = getBaseUrl();

    const response = await fetch(`${baseUrl}/api/authors/${id}`);
    const author: Author = await response.json();

    return author;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};