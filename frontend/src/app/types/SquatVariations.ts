export interface ExcerciseVariation {
  name: string;
  easy: number;
  medium: number;
  hard: number;
}

export const squatVariation: ExcerciseVariation[] = [
  { name: "Competition Squat", easy: 60, medium: 80, hard: 100 },
  { name: "Front Squat", easy: 40, medium: 60, hard: 80 },
  { name: "Squat with Chains", easy: 60, medium: 80, hard: 90 },
  { name: "Pin Squat", easy: 60, medium: 80, hard: 100 },
  { name: "Pause Squat", easy: 60, medium: 80, hard: 100 },
];

export const benchVariation: ExcerciseVariation[] = [
  { name: "Competition Bench Press", easy: 60, medium: 80, hard: 100 },
  { name: "Elevated Legs Bench Press", easy: 40, medium: 60, hard: 80 },
  { name: "Bench Press with Chains", easy: 60, medium: 80, hard: 90 },
  { name: "Pin Bench Press", easy: 60, medium: 80, hard: 100 },
  { name: "Narrow Grip Bench Press", easy: 60, medium: 80, hard: 100 },
];

export const deadliftVariation: ExcerciseVariation[] = [
  { name: "Competition Deadlifts", easy: 60, medium: 80, hard: 100 },
  { name: "Deadlifts with Pause at Knees", easy: 40, medium: 60, hard: 80 },
  { name: "Deadlifts with Chains", easy: 60, medium: 80, hard: 90 },
  { name: "Defecit Deadlifts", easy: 60, medium: 80, hard: 100 },
  { name: "Rack Pull Deadlifts", easy: 60, medium: 80, hard: 100 },
];
