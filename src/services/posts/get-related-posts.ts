import { mocks } from "@/mocks";

export const getRelatedPosts = (id:string) => {
  try {
    const currentPost = mocks.posts.find((post) => post.id === id);
    return mocks.posts
      .filter((post) => post.id !== currentPost?.id && post.author.id === id)
      .slice(0, 3);
  } catch (error) {
    throw new Error(`HandledError: ${error}`);
  }
};