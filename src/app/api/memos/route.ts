import { memosDb } from "@/db/init";
import { createClient } from "@/utils/supabase/server";

export const POST = async (request: Request) => {
  const supabase = createClient();
  const body = await request.json();
  const user = await supabase.auth.getUser();
  const result = await memosDb.create(supabase, {
    ...body,
    user_id: user.data.user?.id,
  });

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
