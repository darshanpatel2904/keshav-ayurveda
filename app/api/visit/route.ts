import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST() {
  await kv.incr("visits");
  return NextResponse.json({ ok: true });
}
