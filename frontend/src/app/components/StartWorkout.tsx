"use client";

import React, { useEffect, useState } from "react";

function StartWorkout() {
  const [workout, setWorkout]: any[] = useState(null);

  useEffect(() => {
    const storedWorkout = sessionStorage.getItem("workout");
    const parsedWorkout = storedWorkout ? JSON.parse(storedWorkout) : null;
    setWorkout(parsedWorkout);
  }, []);
  if (!workout) {
    <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 className="text-4xl text-center">Start Workout</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {workout &&
              workout!.exercises.map((exercise: any, index: any) => (
                <tr key={index}>
                  <td>{exercise.name}</td>
                  <td>
                    <ul>
                      {exercise.sets.map((set: any, setIndex: any) => (
                        <li key={setIndex}>
                          Reps: {set.reps}, Weight: {set.weight}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
