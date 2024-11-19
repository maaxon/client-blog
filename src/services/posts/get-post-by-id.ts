import { mocks } from "@/mocks";

export function getPostById(id: string) {

  return mocks.posts.find((post) => post.id === id);
}