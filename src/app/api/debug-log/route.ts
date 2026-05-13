import { NextRequest, NextResponse } from "next/server";
import { appendFile } from "fs/promises";
import path from "path";

/** Dev-only: persist debug NDJSON for Cursor debug sessions (client cannot write files). */
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }
  try {
    const body = await req.json();
    const line = `${JSON.stringify({ ...body, timestamp: body.timestamp ?? Date.now() })}\n`;
    const logPath = path.join(process.cwd(), ".cursor", "debug-aba357.log");
    await appendFile(logPath, line, "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
