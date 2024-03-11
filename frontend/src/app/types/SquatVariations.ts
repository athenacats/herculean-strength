export interface ExcerciseVariation {
  name: string;
  easy: number;
  medium: number;
  hard: number;
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
  { name: "Deadlifts with Chains", easy: 60, medium: 80, hard: 80 },
  { name: "Defecit Deadlifts", easy: 60, medium: 70, hard: 80 },
  { name: "Rack Pull Deadlifts", easy: 70, medium: 85, hard: 110 },
];
