import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(request) {
  //Reade cookie from request
//   const theme = request.cookies.get("theme")
const cookieStore = await cookies()
// const resultPerPage = cookieStore.get("resultPerPage")
// console.log(resultPerPage)
// console.log(theme)

cookieStore.set("score", "100")

//   return new Response("set cookie", {
//     headers: {
//     //   "Set-Cookie": "theme=dark",
//       "Set-Cookie": "resultPerPage=20"
//     },
//   });

return NextResponse.json({
    message :"cookie set!"
})
}
