"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function StartWorkout() {
  const [workout, setWorkout]: any[] = useState(null);

  useEffect(() => {
    const storedWorkout = sessionStorage.getItem("workout");
    const parsedWorkout = storedWorkout ? JSON.parse(storedWorkout) : null;
    setWorkout(parsedWorkout);
  }, []);

  console.log(workout);
  if (!workout) {
    <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Start Workout</h1>
        <div>
          {workout &&
            workout!.exercises.map((exercise: any, index: any) => (
              <div key={index}>
                <h2>{exercise.name.name}</h2>
                <ul>
                  {exercise.sets.map((set: any, setIndex: any) => (
                    <li key={setIndex}>
                      Reps: {set.reps}, Weight: {set.weight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default StartWorkout;
