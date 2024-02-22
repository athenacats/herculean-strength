export type MoodOption = {
  label: string;
  value: number;
};

export type EnergyOption = {
  label: string;
  value: number;
};

export const moodOptions: MoodOption[] = [
  { label: "Very bad", value: 0 },
  { label: "Bad", value: 1 },
  { label: "Okay", value: 2 },
  { label: "Good", value: 3 },
  { label: "Very good", value: 4 },
  { label: "Excellent", value: 5 },
];

export const energyOptions: EnergyOption[] = [
  { label: "Very bad", value: 0 },
  { label: "Bad", value: 1 },
  { label: "Okay", value: 2 },
  { label: "Good", value: 3 },
  { label: "Very good", value: 4 },
  { label: "Excellent", value: 5 },
];
