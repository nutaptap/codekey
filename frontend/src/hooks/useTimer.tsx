import { useState, useEffect } from "react";

export function useTimer(initialTime: number) {
  const [time, setTime] = useState(initialTime);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined = undefined;

    if (start) {
      intervalId = setInterval(() => {
        setTime((prevTime: number) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalId);
            return prevTime;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [start]);

  return { time, setTime, start, setStart };
}
