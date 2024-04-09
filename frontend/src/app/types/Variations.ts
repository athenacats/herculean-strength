export interface ExcerciseVariation {
  name: string;
  easy: number;
  medium: number;
  hard: number;
}

export interface AccessoriesVariation {
  name: string;
  weight: number;
}

export interface Abdominals {
  name: string;
  weight: number;
}

export const squatVariation: ExcerciseVariation[] = [
  { name: "Competition Squat", easy: 50, medium: 70, hard: 90 },
  { name: "Front Squat", easy: 30, medium: 50, hard: 70 },
  { name: "Squat with Chains", easy: 40, medium: 55, hard: 70 },
  { name: "Pin Squat", easy: 50, medium: 70, hard: 80 },
  { name: "Pause Squat", easy: 50, medium: 70, hard: 80 },
];

export const benchVariation: ExcerciseVariation[] = [
  { name: "Competition Bench Press", easy: 50, medium: 70, hard: 90 },
  { name: "Elevated Legs Bench Press", easy: 30, medium: 50, hard: 70 },
  { name: "Bench Press with Chains", easy: 30, medium: 50, hard: 70 },
  { name: "Pin Bench Press", easy: 50, medium: 65, hard: 80 },
  { name: "Narrow Grip Bench Press", easy: 50, medium: 50, hard: 70 },
];

export const deadliftVariation: ExcerciseVariation[] = [
  { name: "Competition Deadlifts", easy: 60, medium: 70, hard: 90 },
  { name: "Deadlifts with Pause at Knees", easy: 60, medium: 70, hard: 80 },
  { name: "Deadlifts with Chains", easy: 60, medium: 70, hard: 80 },
  { name: "Defecit Deadlifts", easy: 60, medium: 70, hard: 80 },
  { name: "Rack Pull Deadlifts", easy: 70, medium: 85, hard: 110 },
];

export const squatAccessories: AccessoriesVariation[] = [
  { name: "Goodmorning", weight: 30 },
  { name: "Leg Press", weight: 60 },
  { name: "Hack Squat", weight: 60 },
  { name: "Leg Extension", weight: 30 },
  { name: "Bulgarian Split Squats", weight: 20 },
  { name: "Calf Raises", weight: 20 },
];

export const deadliftAccessories: AccessoriesVariation[] = [
  { name: "Hyperextensions", weight: 20 },
  { name: "Leg Curls", weight: 30 },
  { name: "Romanian Deadlift", weight: 40 },
  { name: "Hip Thrust", weight: 60 },
  { name: "Seated Cable Row", weight: 40 },
  { name: "Lat Pulldown", weight: 40 },
];

export const benchAccessories: AccessoriesVariation[] = [
  { name: "Incline Press", weight: 50 },
  { name: "Dumbell Press", weight: 20 },
  { name: "Overhead Press", weight: 50 },
  { name: "Dumbell Curl", weight: 20 },
  { name: "Tricep Pushdown", weight: 20 },
  { name: "Overhead Tricep Extension", weight: 20 },
];

export const abdominals: Abdominals[] = [
  { name: "Hanging Pike", weight: 0 },
  { name: "Paloff Press", weight: 10 },
  { name: "Sit up", weight: 0 },
  { name: "Landmine Twist", weight: 10 },
];
