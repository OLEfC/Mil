export type HealthStatus = 'stable' | 'injured' | 'critical';

export interface Personnel {
  id: string;
  name: string;
  rank: string;
  unit: string;
  position: [number, number];
  status: HealthStatus;
  vitals: {
    heartRate: number;
    bloodPressure: {
      systolic: number;
      diastolic: number;
    };
    spO2: number;
    temperature: number;
    lastUpdate: string;
  };
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'coordinator';
  token: string;
}