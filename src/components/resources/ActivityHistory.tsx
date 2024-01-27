"use client";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { MemoModelDB } from "@/db/init";
import { buildHistoricalActivityRecord } from "@/utils/memos";

const TooltipActivityHistory = ({
  children,
  record,
  activitiesDoneInThisDay,
}: {
  children: React.ReactNode;
  record: Date;
  activitiesDoneInThisDay: number;
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={4}>
            <div className="px-2 py-1 mb-2 border rounded-md shadow-md bg-background w-max border-neutral-800">
              <span>
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                }).format(record)}
              </span>
              <p className="text-neutral-500">
                {activitiesDoneInThisDay} resources
              </p>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export type ActivityHistory = {
  history: {
    // YYYY/MM/DD
    timestamp: `${string}/${string}/${string}`;
    activitiesDone: number;
  }[];
};
export type ActivityHistoryProps = {
  resources?: MemoModelDB[];
};

export function ActivityHistory({ resources }: ActivityHistoryProps) {
  const history =
    resources && resources?.length > 0
      ? buildHistoricalActivityRecord(resources)
      : [];
  const pastDays = Array.from({ length: 5 }).map((_, i) => {
    const now = new Date();
    now.setDate(now.getDate() - i);
    return now;
  });
  const totalActivitiesDone = history.reduce((prev, curr) => {
    return prev + curr.activitiesDone;
  }, 0);
  return (
    <div className="mb-4 grid w-full grid-cols-[repeat(5,1fr)] grid-rows-[repeat(1,40px)] gap-1">
      {pastDays.reverse().map((record) => {
        const formattedDate = `${record.getFullYear()}/${
          record.getMonth() + 1
        }/${record.getDate()}`;
        const match = history.find(
          (entry) => entry.timestamp === formattedDate
        );

        const activitiesDoneInThisDay = match?.activitiesDone ?? 0;
        const dayActivitiesPercentage =
          activitiesDoneInThisDay / totalActivitiesDone;

        return (
          <TooltipActivityHistory
            activitiesDoneInThisDay={activitiesDoneInThisDay}
            record={record}
            key={"g" + record.toISOString()}
          >
            <button
              className="relative bg-green-900 border rounded-md group border-neutral-200 bg-card dark:border-neutral-700"
              style={{
                background: `linear-gradient(90deg, #10B981 ${
                  dayActivitiesPercentage * 100
                }%, #1F2937 ${dayActivitiesPercentage * 100}%)`,
              }}
            ></button>
          </TooltipActivityHistory>
        );
      })}
    </div>
  );
}
