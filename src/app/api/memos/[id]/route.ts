import { memosDb } from "@/db/init";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id: string = params.id as string;

  const supabase = createClient();
  const result = await memosDb.delete(supabase, id);

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id: string = params.id as string;
  const { pinned } = await request.json();
  const supabase = createClient();
  console.log({
    id,
    pinned,
  });
  const result = await memosDb.setPinned(supabase, id, pinned);
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
