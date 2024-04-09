"use client";

import React from "react";
import { useWorkout } from "../WorkoutProvider";

function StartWorkout() {
  const { workout } = useWorkout();
  console.log(workout);
  return <>{!workout ? <div>Loading...</div> : <div>Start Workout</div>}</>;
}

export default StartWorkout;
