export type workoutDataType = {
  userEmail: string;
  date: string;
  exercises: {
    units: string;
    name: string;
    sets: Array<{
      reps: number;
      weight: number;
    }>;
  };
};

export type workoutDataArray = workoutDataType[];
