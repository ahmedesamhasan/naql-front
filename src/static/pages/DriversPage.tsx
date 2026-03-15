import { DataTable, Panel, SectionHeader, StatusBadge } from '../components';
import { drivers } from '../data';

export function DriversPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Drivers" subtitle="Driver management preview for portfolio and quick demos." />
      <Panel title="Driver list">
        <DataTable
          rows={drivers}
          columns={[
            { key: 'name', title: 'Name', render: (row) => row.name },
            { key: 'phone', title: 'Phone', render: (row) => row.phone },
            { key: 'city', title: 'City', render: (row) => row.city },
            { key: 'rating', title: 'Rating', render: (row) => row.rating.toFixed(1) },
            { key: 'trips', title: 'Trips', render: (row) => row.trips },
            {
              key: 'status',
              title: 'Status',
              render: (row) => {
                const tone = row.status === 'Active' ? 'green' : row.status === 'Review' ? 'orange' : 'slate';
                return <StatusBadge tone={tone}>{row.status}</StatusBadge>;
              },
            },
          ]}
        />
      </Panel>
    </div>
  );
}
