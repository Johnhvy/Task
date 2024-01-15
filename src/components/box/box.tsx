"use client";

import { Countdown } from "@/app/challenges/countdown";
import { useChallenge } from "@/context/challenge-context";
import { useTask } from "@/context/task-context";

const Box = () => {
  const { tasks } = useTask();
  const { challenges } = useChallenge();
  const urgentTasks = tasks.filter((task) => task.priority === "urgent");
  const notUrgentTasks = tasks.filter((task) => task.priority === "not-urgent");
  const importantTasks = tasks.filter((task) => task.priority === "important");
  const notImportantTasks = tasks.filter(
    (task) => task.priority === "not-important"
  );
  return (
    <div className="border p-10 rounded-lg">
      <div className="flex gap-3">
        <div className="w-8/12 flex-col border-blue-500">
          <div className="flex items-center  border-blue-500">
            <div className="w-12 whitespace-nowrap	 p-4"></div>
            <div className="w-2/4 p-3 text-blue-500 text-lg font-bold border-l border-blue-500">
              Urgent
            </div>
            <div className="w-2/4 p-3 text-blue-500 text-lg font-bold border-l border-blue-500">
              Not Urgent
            </div>
          </div>
          <div className="flex min-h-40">
            <div className="w-12 whitespace-nowrap flex justify-center items-center p-4 border-t border-blue-500">
              <span className="rotate-[270deg] text-blue-500 inline-block text-lg font-bold">
                Important
              </span>
            </div>
            <div className="w-2/4 p-4 border-l border-t border-blue-500">
              {urgentTasks.map((task, index) => {
                return (
                  <div
                    key={index}
                    className="p-3 border-b hover:bg-muted ease-in-out transition"
                  >
                    <div className="flex justify-between">
                      <h3>{task.title}</h3>
                      <span>{task.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-2/4 p-4 border-l border-t border-blue-500">
              {notUrgentTasks.map((task, index) => {
                return (
                  <div
                    key={index}
                    className="p-3 border-b hover:bg-muted ease-in-out transition"
                  >
                    <div className="flex justify-between">
                      <h3>{task.title}</h3>
                      <span>{task.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex min-h-40">
            <div className="w-12 whitespace-nowrap	border-t border-blue-500 flex justify-center items-center p-4">
              <span className="rotate-[270deg] inline-block text-blue-500 text-lg font-bold">
                Not Important
              </span>
            </div>
            <div className="w-2/4 p-4 border-l border-t border-blue-500">
              {importantTasks.map((task, index) => {
                return (
                  <div
                    key={index}
                    className="p-3 border-b hover:bg-muted ease-in-out transition"
                  >
                    <div className="flex justify-between">
                      <h3>{task.title}</h3>
                      <span>{task.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-2/4 p-4 border-l border-t border-blue-500">
              {notImportantTasks.map((task, index) => {
                return (
                  <div
                    key={index}
                    className="p-3 border-b hover:bg-muted ease-in-out transition"
                  >
                    <div className="flex justify-between">
                      <h3>{task.title}</h3>
                      <span>{task.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-4/12 border p-1">
          <span className="block text-xl text-blue-400 font-semibold ml-2 mt-3">Challenges</span>
          {challenges.map((challenge: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex justify-between items-center p-3 m-3 border">
                  <h3 className="basis-8/12 text-xl font-semibold">
                    {challenge.title}
                  </h3>
                  <div className="basis-4/12">
                    <Countdown targetDate={challenge.date} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Box;
