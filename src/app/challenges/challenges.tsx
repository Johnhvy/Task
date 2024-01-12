"use client";
import React, { useState } from "react";
import { useChallenge } from "@/context/challenge-context";
import { Countdown } from "./countdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "./components/date-time-picker";

interface Challenge {
  id: string;
  title: string;
  date: Date;
}


const Challenges = () => {
  const { challenges, deleteChallenge, updateChallenge } = useChallenge();
  const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(
    null
  );

  const handleTimeEdit = (challenge: any) => {
    setEditingChallenge(challenge);
  };

  const handleTimeSave = () => {
    if (editingChallenge) {
      updateChallenge(editingChallenge.id, editingChallenge);
      setEditingChallenge(null);
    }

  };

  const handleTimeCancel = () => {
    setEditingChallenge(null);
  };

  const handleDateTimeClick = (challenge: any) => {
    setEditingChallenge(challenge);
  };

  return (
    <>
      {challenges.length <= 0 ? (
        <>
          <h1>No Challenges</h1>
        </>
      ) : (
        <>
          {challenges.map((challenge) => {
            const isEditing =
              editingChallenge && editingChallenge.id === challenge.id;

            return (
              <div
                key={challenge.id}
                className="border flex mb-3 rounded-lg justify-between items-center p-1 md:p-3"
              >
                <Sheet>
                  <SheetTrigger>
                    <h1 className="text-5xl font-semibold">
                      {challenge.title}
                    </h1>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <span className="text-3xl font-semibold cursor-pointer">
                          {challenge.title}
                        </span>
                      </SheetTitle>
                      <SheetDescription>
                        <DateTimePicker
                          date={new Date(challenge.date)}
                          setDate={(newDate) =>
                            handleTimeEdit({ ...challenge, date: newDate })
                          }
                        />
                      </SheetDescription>
                    </SheetHeader>
                    <SheetFooter>
                      {isEditing ? (
                        <>
                          <Button onClick={handleTimeSave}>Save</Button>
                          <Button onClick={handleTimeCancel}>Cancel</Button>
                        </>
                      ) : (
                        <Button onClick={() => deleteChallenge(challenge.id)}>
                          Delete
                        </Button>
                      )}
                    </SheetFooter>
                  </SheetContent>
                </Sheet>

                <Countdown
                  targetDate={
                    isEditing ? editingChallenge.date : challenge.date
                  }
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Challenges;
