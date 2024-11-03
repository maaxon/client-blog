import { Author } from "@/types";
import { getBaseUrl } from "@/utils/get-base-url/get-base-url";

export const getFirstFourAuthors = async () => {
  try {
    const baseUrl = getBaseUrl();

    const response = await fetch(`${baseUrl}/api/authors?limit=4`);
    const authors: Author[] = await response.json();

    return authors;
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};