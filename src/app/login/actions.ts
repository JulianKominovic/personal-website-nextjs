"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `http://localhost:8000/auth/callback`,
    },
  });
  console.log({
    data,
    error,
  });
  if (error) {
    redirect("/error");
  }

  redirect(data.url);
}
