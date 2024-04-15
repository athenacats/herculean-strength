import { useState } from "react";
import { Button } from "react-bootstrap";

export const Timer = () => {
  const [seconds, setSeconds] = useState(180);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setSeconds(180); // Reset the timer
    if (!intervalId) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(id);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <span>
      <Button onClick={startTimer}>Rest</Button>
      {`${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`}
    </span>
  );
};
