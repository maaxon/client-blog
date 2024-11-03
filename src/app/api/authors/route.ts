import { NextRequest, NextResponse } from "next/server";

import { mocks } from "@/mocks";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const limit = searchParams.get("limit");
  const parsedLimit = limit ? parseInt(limit, 10) : null;


  const authors = parsedLimit ? mocks.authors.slice(0, parsedLimit) : mocks.authors;

  return NextResponse.json(authors);
}