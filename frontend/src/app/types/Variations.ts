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
  { name: "Competition Squat", easy: 0.5, medium: 0.7, hard: 0.9 },
  { name: "Front Squat", easy: 0.3, medium: 0.5, hard: 0.7 },
  { name: "Squat with Chains", easy: 0.4, medium: 55, hard: 0.7 },
  { name: "Pin Squat", easy: 0.5, medium: 0.7, hard: 0.8 },
  { name: "Pause Squat", easy: 0.5, medium: 0.7, hard: 0.8 },
];

export const benchVariation: ExcerciseVariation[] = [
  { name: "Competition Bench Press", easy: 0.5, medium: 0.7, hard: 0.9 },
  { name: "Elevated Legs Bench Press", easy: 0.3, medium: 0.5, hard: 0.7 },
  { name: "Bench Press with Chains", easy: 0.3, medium: 0.5, hard: 0.7 },
  { name: "Pin Bench Press", easy: 0.5, medium: 0.65, hard: 0.8 },
  { name: "Narrow Grip Bench Press", easy: 0.5, medium: 0.5, hard: 0.7 },
];

export const deadliftVariation: ExcerciseVariation[] = [
  { name: "Competition Deadlifts", easy: 0.6, medium: 0.7, hard: 0.9 },
  { name: "Deadlifts with Pause at Knees", easy: 0.6, medium: 0.7, hard: 0.8 },
  { name: "Deadlifts with Chains", easy: 0.6, medium: 0.7, hard: 0.8 },
  { name: "Defecit Deadlifts", easy: 0.6, medium: 0.7, hard: 0.8 },
  { name: "Rack Pull Deadlifts", easy: 0.7, medium: 0.85, hard: 1.1 },
];

export const squatAccessories: AccessoriesVariation[] = [
  { name: "Goodmorning", weight: 0.3 },
  { name: "Leg Press", weight: 0.6 },
  { name: "Hack Squat", weight: 0.6 },
  { name: "Leg Extension", weight: 0.3 },
  { name: "Bulgarian Split Squats", weight: 0.2 },
  { name: "Calf Raises", weight: 0.2 },
];

export const deadliftAccessories: AccessoriesVariation[] = [
  { name: "Hyperextensions", weight: 0.2 },
  { name: "Leg Curls", weight: 0.3 },
  { name: "Romanian Deadlift", weight: 0.4 },
  { name: "Hip Thrust", weight: 0.6 },
  { name: "Seated Cable Row", weight: 0.4 },
  { name: "Lat Pulldown", weight: 0.4 },
];

export const benchAccessories: AccessoriesVariation[] = [
  { name: "Incline Press", weight: 0.5 },
  { name: "Dumbell Press", weight: 0.2 },
  { name: "Overhead Press", weight: 0.5 },
  { name: "Dumbell Curl", weight: 0.2 },
  { name: "Tricep Pushdown", weight: 0.2 },
  { name: "Overhead Tricep Extension", weight: 0.2 },
];

export const abdominals: Abdominals[] = [
  { name: "Hanging Pike", weight: 0 },
  { name: "Paloff Press", weight: 0.1 },
  { name: "Sit up", weight: 0 },
  { name: "Landmine Twist", weight: 0.1 },
];
