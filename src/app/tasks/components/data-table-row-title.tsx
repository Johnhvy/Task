import { Badge } from "@/components/ui/badge";
import { useTask } from "@/context/task-context";
import { useState } from "react";
import { labels } from "../data/data";
import { Input } from "@/components/ui/input";

export function DataTableRowTitle({row}:any) {
  const label = labels.find((label) => label.value === row.original.label);
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(row.getValue("title"));
  const { updateTask } = useTask();

  const handleTitleClick = () => {
    setEditing(true);
  };

  const handleTitleChange = (e: any) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setEditing(false);
    updateTask(row.original.id, { title: editedTitle });
  };
  return (
    <div className="flex space-x-2">
      {label && <Badge variant="outline">{label.label}</Badge>}
      {isEditing ? (
          <Input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            className="max-w-[500px] truncate font-medium px-2 border-none h-full"
          />
        ) : (
          <span
            onClick={handleTitleClick}
            className="max-w-[500px] truncate font-medium"
            title="Click to Edit"
          >
            {row.getValue("title")}
          </span>
        )}
    </div>
  );
}
