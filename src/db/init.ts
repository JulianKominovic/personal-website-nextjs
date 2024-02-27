import { SupabaseClient } from "@supabase/supabase-js";

export type MemoModelDB = {
  /**
   * @important ID MUST ALWAYS BE A NUMBER
   */
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  pinned: boolean;
  user_id: string;
};

function sortByPin(arr: MemoModelDB[]) {
  return arr.sort((a, b) => {
    const aPinned = Number(a.pinned);
    const bPinned = Number(b.pinned);
    return bPinned - aPinned;
  });
}

/**
 * Notes:
 *
 * @important ID MUST ALWAYS BE A NUMBER
 */

const memosDb = {
  create: async (supabase: SupabaseClient, memo: Omit<MemoModelDB, "id">) => {
    const dbMemos = supabase.from("notes");
    const res = await dbMemos.insert(memo);
    console.log(res);
    return res;
  },
  searchContent: async (
    supabase: SupabaseClient,
    content: string
  ): Promise<MemoModelDB[] | null> => {
    const dbMemos = supabase.from("notes");

    return (await dbMemos.select("*").contains("content", content)).data;
  },
  selectAll: async (supabase: SupabaseClient): Promise<MemoModelDB[]> => {
    const dbMemos = supabase.from("notes");

    const results = (await dbMemos.select("*")).data;
    if (!results) return [];
    return sortByPin(results);
  },
  selectById: async (
    supabase: SupabaseClient,
    id: number
  ): Promise<MemoModelDB> => {
    const dbMemos = supabase.from("notes");

    // @ts-expect-error - It's valid
    return (await dbMemos.select<MemoModelDB>("*").eq("id", id)).data?.[0];
  },
  update: async (supabase: SupabaseClient, memo: MemoModelDB) => {
    const dbMemos = supabase.from("notes");

    return (await dbMemos.update(memo)).data;
  },
  delete: async (supabase: SupabaseClient, id: string) => {
    const dbMemos = supabase.from("notes");

    return await dbMemos.delete().eq("id", id);
  },
  setPinned: async (supabase: SupabaseClient, id: string, pinned: boolean) => {
    const dbMemos = supabase.from("notes");
    const result = await dbMemos.update({ pinned }).eq("id", id);
    return result;
  },
};
export { memosDb };
