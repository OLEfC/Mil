import { Badge } from 'lucide-react';
import type { HealthStatus } from '../types';

interface StatusFilterProps {
  selectedStatus: HealthStatus | 'all';
  onChange: (status: HealthStatus | 'all') => void;
}

export function StatusFilter({ selectedStatus, onChange }: StatusFilterProps) {
  return (
    <div className="flex gap-2 p-4 bg-white rounded-lg shadow-md">
      <button
        onClick={() => onChange('all')}
        className={`px-4 py-2 rounded-md transition-colors ${
          selectedStatus === 'all'
            ? 'bg-gray-200 text-gray-800'
            : 'hover:bg-gray-100'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onChange('stable')}
        className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
          selectedStatus === 'stable'
            ? 'bg-green-100 text-green-800'
            : 'hover:bg-gray-100'
        }`}
      >
        <Badge className="w-4 h-4" />
        Stable
      </button>
      <button
        onClick={() => onChange('injured')}
        className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
          selectedStatus === 'injured'
            ? 'bg-yellow-100 text-yellow-800'
            : 'hover:bg-gray-100'
        }`}
      >
        <Badge className="w-4 h-4" />
        Injured
      </button>
      <button
        onClick={() => onChange('critical')}
        className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
          selectedStatus === 'critical'
            ? 'bg-red-100 text-red-800'
            : 'hover:bg-gray-100'
        }`}
      >
        <Badge className="w-4 h-4" />
        Critical
      </button>
    </div>
  );
}