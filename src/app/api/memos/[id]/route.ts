import { memosDb } from "@/db/init";
import { cookies } from "next/headers";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  if (cookies().get("auth-cookie")?.value === process.env.AUTH_SECRET) {
    const id: string = params.id as string;
    const result = await memosDb.delete(id);
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

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id: string = params.id as string;
  const { pinned } = await request.json();
  if (cookies().get("auth-cookie")?.value === process.env.AUTH_SECRET) {
    const result = await memosDb.setPinned(+id, pinned);
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
