// @ts-expect-error - It's valid
import type { RawQueryResult } from "node_modules/surrealdb.js/esm/types";
import { Surreal } from "surrealdb.js";

const dbMemos = new Surreal();
console.log({
  database: process.env.RESOURCES_DB_ID as string,
  namespace: process.env.RESOURCES_DB_ID as string,
  auth: {
    password: process.env.DB_PASSWORD as string,
    username: process.env.DB_USER as string,
    database: process.env.RESOURCES_DB_ID as string,
    namespace: process.env.RESOURCES_DB_ID as string,
    scopes: ["*"],
  },
});
await dbMemos.connect(`http://${process.env.DB_IP_PORT}/rpc`, {
  database: process.env.RESOURCES_DB_ID as string,
  namespace: process.env.RESOURCES_DB_ID as string,
  auth: {
    password: process.env.DB_USER as string,
    username: process.env.DB_PASSWORD as string,
    database: process.env.RESOURCES_DB_ID as string,
    namespace: process.env.RESOURCES_DB_ID as string,
    scopes: ["*"],
  },
});
await dbMemos.wait();

export type MemoModelDB = {
  /**
   * @important ID MUST ALWAYS BE A NUMBER
   */
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
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
  create: async (memo: Omit<MemoModelDB, "id">) => {
    const queryLastCreatedElement = (
      await dbMemos.query("select * from memos ORDER BY id DESC limit 1")
    )[0];

    const lastCreatedElementId =
      queryLastCreatedElement &&
      (queryLastCreatedElement as RawQueryResult[])[0] &&
      (
        (queryLastCreatedElement as MemoModelDB[])[0]?.id as unknown as string
      ).replace(new RegExp("[^0-9]", "g"), "");

    const id = lastCreatedElementId ? parseInt(lastCreatedElementId) + 1 : 0;
    return await dbMemos.create("memos", { ...memo, id: id });
  },
  searchContent: async (
    content: string
  ): Promise<MemoModelDB[] | undefined> => {
    const allMemos = await memosDb.selectAll();
    const regex = new RegExp(content, "i");
    const filteredMemos = allMemos.filter(
      (memo) => memo.content && regex.test(memo.content)
    );
    return filteredMemos;
  },
  selectAll: async (): Promise<MemoModelDB[]> => {
    const results = (await (
      await dbMemos.query("select * from memos ORDER BY id DESC")
    )[0]) as MemoModelDB[];
    return sortByPin(results);
  },
  selectById: async (id: number): Promise<MemoModelDB> => {
    // @ts-expect-error - It's valid
    return await dbMemos.select<MemoModelDB>("memos:" + id)[0];
  },
  update: async (memo: MemoModelDB) => {
    return await dbMemos.update(
      "memos:" + parseInt(memo.id as unknown as string),
      memo
    );
  },
  delete: async (id: number | string) => {
    return await dbMemos.delete(`memos:${parseInt(id as string)}`);
  },
  setPinned: async (id: number, pinned: boolean) => {
    const memo = (await dbMemos.select<MemoModelDB>("memos:" + id))[0];
    return await dbMemos.update("memos:" + parseInt(id as unknown as string), {
      ...memo,
      pinned,
    });
  },
};
export { memosDb };
