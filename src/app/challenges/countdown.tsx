import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

const formatNumber = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

 function calculateTimeLeft(targetDate: Date | string) {
   const targetTime =
     typeof targetDate === "string"
       ? new Date(targetDate).getTime()
       : targetDate.getTime();
   const currentTime = new Date().getTime();
   const difference = targetTime - currentTime;

   if (difference <= 0) {
     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
   }

   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
   const hours = Math.floor(
     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

   return { days, hours, minutes, seconds };
 }


  return (
    <div className="flex justify-center items-center w-40 h-40 border rounded-full">
      <p className="text-2xl">
        {formatNumber(timeLeft.days)} days <br />
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
        {formatNumber(timeLeft.seconds)}
      </p>
    </div>
  );
};
