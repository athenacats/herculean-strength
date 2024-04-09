import React, { createContext, useContext, useState } from "react";

const WorkoutContext = createContext<any | null>(null);

export const useWorkout = () => useContext(WorkoutContext);

export const WorkoutProvider = ({ children }: any) => {
  const [workout, setWorkout] = useState(null);
  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
