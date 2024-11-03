import { NextRequest, NextResponse } from "next/server";

import { mocks } from "@/mocks";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const currentPost = mocks.posts.find((post) => post.id === id);
  const posts = mocks.posts
    .filter((post) => post.id !== currentPost?.id && post.author.id === id)
    .slice(0,3);

  if (!posts) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  return NextResponse.json(posts, { status: 200 });
}