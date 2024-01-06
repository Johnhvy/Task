import Tasks from "./tasks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iTasks - Task and Issue Tracker",
  description:
    "Efficiently manage tasks and track issues with iTasks, your dedicated task and issue tracker.",
};

export default function TaskPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="h-full flex-1 flex-col mb-3 md:flex">
        <Tasks />
      </div>
    </div>
  );
}
