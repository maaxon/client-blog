import { NextRequest, NextResponse } from "next/server";

import { mocks } from "@/mocks";
import { getValidTags, normalizeTag } from "@/utils/normalize-tags/normalize-tags";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } },
) {
  const { searchParams } = request.nextUrl;

  const tags = searchParams.get("tags")?.split(",");

  const category = params.category;

  const posts = mocks.posts.filter((post) => {
      const categoryMatch = post.category === category;

      const validTags = getValidTags(tags);
      const normalizedTags = post.tags.map(normalizeTag)

      const tagsMatch = validTags.length === 0 || validTags.some(tag => normalizedTags.includes(tag));

      return categoryMatch && tagsMatch;
    },
  );

  if (!posts) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  return NextResponse.json(posts, { status: 200 });
}