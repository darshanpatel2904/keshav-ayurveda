import { readData, writeData } from "@/lib/store";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const data = readData();

  data.contacts.push({
    name: body.name,
    email: body.email,
    message: body.message,
    createdAt: new Date().toISOString(),
  });

  writeData(data);
  return NextResponse.json({ ok: true });
}
