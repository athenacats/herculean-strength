export type Exercise = {
  units: string;
  name: string;
  sets: Array<{
    reps: number;
    weight: number;
  }>;
};

export type WorkoutData = {
  userEmail: string;
  date: string;
  exercises: Exercise[];
};

export type WorkoutDataArray = WorkoutData[];
