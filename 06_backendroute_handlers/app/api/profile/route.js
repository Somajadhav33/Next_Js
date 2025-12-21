import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request) {
  // //Access Request Headers
  // const requestHeaders = new Headers(request.headers)
  // const authHeader = requestHeaders.get("Authorization")
  // console.log(authHeader)

  const headerList = await headers();
  const authHeader = headerList.get("Authorization");
  console.log(authHeader);

  return new Response("<h1>Api Data</h1>", {
    headers: {
      "Content-type": "text/html",
    },
  });
}
