import { NextRequest, NextResponse } from "next/server";

import { mocks } from "@/mocks";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const posts = mocks.posts.filter((post) => post.author.id === id);

  if (!posts) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  return NextResponse.json(posts, { status: 200 });
}