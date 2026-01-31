import { readData, writeData } from "@/lib/store";
import { NextResponse } from "next/server";

export async function POST() {
  const data = readData();
  data.visits += 1;
  writeData(data);
  return NextResponse.json({ ok: true });
}
