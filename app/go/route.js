import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "rapid_rush_set";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 jam

function getQuizUrls() {
  const raw = process.env.QUIZ_URLS ?? "";
  const urls = raw
    .split(/[\n,]+/)
    .map((url) => url.trim())
    .filter(Boolean);

  const validUrls = urls.filter((url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch {
      return false;
    }
  });

  return validUrls;
}

export async function GET(request) {
  const urls = getQuizUrls();

  if (urls.length === 0) {
    return NextResponse.json(
      {
        error: "QUIZ_URLS belum dikonfigurasi atau tidak berisi URL yang valid."
      },
      { status: 500 }
    );
  }

  const mode = (process.env.ASSIGNMENT_MODE ?? "sticky").toLowerCase();
  const savedIndex = Number.parseInt(request.cookies.get(COOKIE_NAME)?.value ?? "", 10);

  let selectedIndex;
  if (mode === "sticky" && Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < urls.length) {
    selectedIndex = savedIndex;
  } else {
    selectedIndex = Math.floor(Math.random() * urls.length);
  }

  const response = NextResponse.redirect(urls[selectedIndex], 302);
  response.headers.set("Cache-Control", "no-store, max-age=0");

  if (mode === "sticky") {
    response.cookies.set(COOKIE_NAME, String(selectedIndex), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: COOKIE_MAX_AGE
    });
  }

  return response;
}
