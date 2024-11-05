import { Activity, Droplets, Heart, Thermometer } from 'lucide-react';
import { format } from 'date-fns';
import type { Personnel } from '../types';

interface VitalStatsProps {
  vitals: Personnel['vitals'];
}

export function VitalStats({ vitals }: VitalStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5 text-red-500" />
        <span>{vitals.heartRate} BPM</span>
      </div>
      <div className="flex items-center gap-2">
        <Activity className="w-5 h-5 text-blue-500" />
        <span>{vitals.bloodPressure.systolic}/{vitals.bloodPressure.diastolic}</span>
      </div>
      <div className="flex items-center gap-2">
        <Droplets className="w-5 h-5 text-blue-400" />
        <span>{vitals.spO2}% SpO₂</span>
      </div>
      <div className="flex items-center gap-2">
        <Thermometer className="w-5 h-5 text-orange-500" />
        <span>{vitals.temperature}°C</span>
      </div>
      <div className="col-span-2 text-sm text-gray-500">
        Last updated: {format(new Date(vitals.lastUpdate), 'MMM d, HH:mm')}
      </div>
    </div>
  );
}