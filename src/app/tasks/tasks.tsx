"use client";

import { useTask } from "@/context/task-context";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";

const Tasks = () => {
  const { tasks } = useTask() || [];

  return (
    <>
      <DataTable data={tasks} columns={columns} />
    </>
  );
};
export default Tasks;
