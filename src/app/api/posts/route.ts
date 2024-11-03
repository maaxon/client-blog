import { NextRequest, NextResponse } from "next/server";

import { mocks } from "@/mocks";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const limit = searchParams.get("limit");
  const page = searchParams.get("page");

  const parsedLimit = limit ? parseInt(limit, 10) : null;
  const parsedPage = page ? parseInt(page, 10) : null;

  if (parsedLimit === null) {
    return NextResponse.json(mocks.posts);
  }

  const startIndex =
    parsedPage && parsedPage > 0 ? (parsedPage - 1) * parsedLimit : 0;
  const paginatedPosts = mocks.posts.slice(startIndex, startIndex + parsedLimit);

  const hasMore = startIndex + parsedLimit < mocks.posts.length;


  return NextResponse.json({ posts: paginatedPosts, hasMore });
}