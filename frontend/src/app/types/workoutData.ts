type Exercise = {
  units: string;
  name: string;
  sets: Array<{
    reps: number;
    weight: number;
  }>;
};

export type workoutDataType = {
  userEmail: string;
  date: string;
  exercises: Exercise[];
};

export type workoutDataArray = workoutDataType[];
