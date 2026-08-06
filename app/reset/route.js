import { NextResponse } from "next/server";

export async function GET(request) {
  const response = NextResponse.redirect(new URL("/", request.url), 302);
  response.cookies.set("rapid_rush_set", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0
  });
  return response;
}
