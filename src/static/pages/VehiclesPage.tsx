import { DataTable, Panel, SectionHeader, StatusBadge } from '../components';
import { vehicles } from '../data';

export function VehiclesPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Vehicles" subtitle="Vehicle inventory in a fully local static build." />
      <Panel title="Fleet">
        <DataTable
          rows={vehicles}
          columns={[
            { key: 'plate', title: 'Plate', render: (row) => row.plate },
            { key: 'type', title: 'Type', render: (row) => row.type },
            { key: 'model', title: 'Model', render: (row) => row.model },
            { key: 'driver', title: 'Assigned driver', render: (row) => row.driver },
            {
              key: 'status',
              title: 'Status',
              render: (row) => {
                const tone = row.status === 'Ready' ? 'green' : row.status === 'Maintenance' ? 'orange' : 'blue';
                return <StatusBadge tone={tone}>{row.status}</StatusBadge>;
              },
            },
          ]}
        />
      </Panel>
    </div>
  );
}
