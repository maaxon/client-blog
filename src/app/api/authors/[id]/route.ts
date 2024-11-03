import { NextRequest, NextResponse } from "next/server";

import { mocks } from "@/mocks";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const author = mocks.authors.find((author) => author.id === id);

  if (!author) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  return NextResponse.json(author, { status: 200 });
}