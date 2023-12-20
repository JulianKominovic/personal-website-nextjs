import { ActivityHistory } from "@/components/resources/ActivityHistory";
import { MemoModelDB } from "@/db/init";

export function buildHistoricalActivityRecord(
  resources: MemoModelDB[]
): ActivityHistory["history"] {
  const records: Record<ActivityHistory["history"][0]["timestamp"], number> =
    {};
  resources.forEach((res) => {
    const date = new Date(res.updatedAt);

    const dateRecordEntry: ActivityHistory["history"][0]["timestamp"] = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;

    if (records[dateRecordEntry] === undefined) {
      records[dateRecordEntry] = 1;
    } else {
      records[dateRecordEntry]++;
    }
  });
  return Object.entries(records).flatMap(([key, value]) => ({
    timestamp: key,
    activitiesDone: value,
  })) as ActivityHistory["history"];
}
