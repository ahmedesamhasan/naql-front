import { DataTable, Panel, SectionHeader, StatusBadge } from '../components';
import { trips } from '../data';

export function TripsPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Trips" subtitle="Static trip list with local data. No loading state, no API dependency." />
      <Panel title="All trips">
        <DataTable
          rows={trips}
          columns={[
            { key: 'id', title: 'Trip', render: (row) => `#${row.id}` },
            { key: 'rider', title: 'Rider', render: (row) => row.rider },
            { key: 'driver', title: 'Driver', render: (row) => row.driver },
            { key: 'route', title: 'Route', render: (row) => `${row.from} → ${row.to}` },
            { key: 'vehicle', title: 'Vehicle', render: (row) => row.vehicle },
            { key: 'amount', title: 'Amount', render: (row) => row.amount },
            {
              key: 'status',
              title: 'Status',
              render: (row) => {
                const tone = row.status === 'Completed' ? 'green' : row.status === 'In progress' ? 'blue' : row.status === 'Pending' ? 'orange' : 'red';
                return <StatusBadge tone={tone}>{row.status}</StatusBadge>;
              },
            },
          ]}
        />
      </Panel>
    </div>
  );
}
