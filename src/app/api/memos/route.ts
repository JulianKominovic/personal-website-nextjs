import { memosDb } from "@/db/init";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  if (cookies().get("auth-cookie")?.value === process.env.AUTH_SECRET) {
    const body = await request.json();
    const result = await memosDb.create(body);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response("404", {
    status: 404,
  });
};
