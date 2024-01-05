import Tasks from "./tasks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UrTask - Task and Issue Tracker",
  description:
    "Efficiently manage tasks and track issues with UrTask, your dedicated task and issue tracker.",
};


export default function TaskPage() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome to UrNotes
            </h2>
            <p className="text-muted-foreground">
              Simplify your task management with ease and efficiency.
            </p>
          </div>
        </div>
        <Tasks />
      </div>
    </>
  );
}
