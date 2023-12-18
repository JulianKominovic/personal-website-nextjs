import { ActivityHistoryProps } from "@/components/resources/ActivityHistory";
import { MemoModelDB } from "@/db/init";

export function buildHistoricalActivityRecord(
  resources: MemoModelDB[]
): ActivityHistoryProps["history"] {
  const records: Record<
    ActivityHistoryProps["history"][0]["timestamp"],
    number
  > = {};
  resources.forEach((res) => {
    const date = new Date(res.updatedAt);

    const dateRecordEntry: ActivityHistoryProps["history"][0]["timestamp"] = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;

    if (records[dateRecordEntry] === undefined) {
      records[dateRecordEntry] = 0;
    } else {
      records[dateRecordEntry]++;
    }
  });
  return Object.entries(records).flatMap(([key, value]) => ({
    timestamp: key,
    activitiesDone: value,
  })) as ActivityHistoryProps["history"];
}
