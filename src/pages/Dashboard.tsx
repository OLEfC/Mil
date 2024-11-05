import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { SearchBar } from '../components/SearchBar';
import { StatusFilter } from '../components/StatusFilter';
import { PersonnelMarker } from '../components/Map/PersonnelMarker';
import type { HealthStatus } from '../types';
import 'leaflet/dist/leaflet.css';

// Mock data - replace with API call
const mockPersonnel = [
  {
    id: '1',
    name: 'John Smith',
    rank: 'Sergeant',
    unit: 'Alpha Company',
    position: [51.505, -0.09] as [number, number],
    status: 'stable' as HealthStatus,
    vitals: {
      heartRate: 75,
      bloodPressure: { systolic: 120, diastolic: 80 },
      spO2: 98,
      temperature: 36.6,
      lastUpdate: new Date().toISOString(),
    },
  },
  // Add more mock data as needed
];

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<HealthStatus | 'all'>('all');

  const filteredPersonnel = mockPersonnel.filter((p) => {
    const matchesSearch =
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.unit.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 bg-white border-b">
        <div className="max-w-7xl mx-auto space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <StatusFilter
            selectedStatus={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
      </div>
      
      <div className="flex-1">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredPersonnel.map((personnel) => (
            <PersonnelMarker key={personnel.id} personnel={personnel} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}