"use client";

import React from "react";
import { useWorkout } from "../WorkoutProvider";

function StartWorkout() {
  const { workout } = useWorkout();
  console.log(workout);

  if (!workout) {
    <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Start Workout</h1>
        <div>
          {workout.exercises.map((exercise, index) => (
            <div key={index}>
              <h2>{exercise.name}</h2>
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
