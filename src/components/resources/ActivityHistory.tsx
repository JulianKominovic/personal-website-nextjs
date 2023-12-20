"use client";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

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
            <div className="mb-2 w-max rounded-md border border-neutral-300 bg-white px-2 py-1 shadow-md">
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

export type ActivityHistoryProps = {
  history: {
    // YYYY/MM/DD
    timestamp: `${string}/${string}/${string}`;
    activitiesDone: number;
  }[];
};

export function ActivityHistory({ history }: ActivityHistoryProps) {
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
              className="group relative rounded-md border border-neutral-200 dark:border-neutral-700"
              style={{
                background: `hsl(142deg 50% ${
                  100 - 60 * dayActivitiesPercentage
                }%)`,
              }}
            ></button>
          </TooltipActivityHistory>
        );
      })}
    </div>
  );
}
