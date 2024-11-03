import { NextResponse } from "next/server";

import { mocks } from "@/mocks";

export async function GET() {

  const post = mocks.featured_posts;

  return NextResponse.json(post);
}