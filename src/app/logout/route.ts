import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const GET = async function signOut() {
  console.log(await createClient().auth.signOut());
  redirect("/");
};
