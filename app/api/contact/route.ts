import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await kv.lpush("contacts", {
    ...body,
    createdAt: new Date().toISOString(),
  });
  return NextResponse.json({ ok: true });
}
