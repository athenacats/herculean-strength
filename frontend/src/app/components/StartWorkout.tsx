"use client";

import React, { useEffect, useState } from "react";
import { useWorkout } from "../WorkoutProvider";

function StartWorkout() {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const storedWorkout = localStorage.getItem("workout");
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
            workout!.exercises.map((exercise, index) => (
              <div key={index}>
                <h2>{exercise.name.name}</h2>
                <ul>
                  {exercise.sets.map((set, setIndex) => (
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
