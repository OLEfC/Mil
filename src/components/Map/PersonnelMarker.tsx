import { Circle, Popup } from 'react-leaflet';
import type { Personnel } from '../../types';
import { VitalStats } from '../VitalStats';

const statusColors = {
  stable: '#10B981',
  injured: '#F59E0B',
  critical: '#EF4444',
};

interface PersonnelMarkerProps {
  personnel: Personnel;
}

export function PersonnelMarker({ personnel }: PersonnelMarkerProps) {
  return (
    <Circle
      center={personnel.position}
      radius={50}
      pathOptions={{
        color: statusColors[personnel.status],
        fillColor: statusColors[personnel.status],
        fillOpacity: 0.7,
      }}
    >
      <Popup>
        <div className="min-w-[300px]">
          <h3 className="text-lg font-semibold mb-2">
            {personnel.rank} {personnel.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">Unit: {personnel.unit}</p>
          <VitalStats vitals={personnel.vitals} />
        </div>
      </Popup>
    </Circle>
  );
}