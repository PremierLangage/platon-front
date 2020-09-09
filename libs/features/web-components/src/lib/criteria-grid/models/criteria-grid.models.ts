export interface Level {
    id: number;
    description: string;
    points: number;
  }

  export interface Criterion {
    id: number;
    description: string;
    levels: Level[];
  }
