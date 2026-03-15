import { DataTable, Panel, SectionHeader, StatusBadge } from '../components';
import { users } from '../data';

export function UsersPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Users" subtitle="Clean static users page. Useful for presentation and design review." />
      <Panel title="Registered users">
        <DataTable
          rows={users}
          columns={[
            { key: 'name', title: 'Name', render: (row) => row.name },
            { key: 'email', title: 'Email', render: (row) => row.email },
            { key: 'joined', title: 'Joined', render: (row) => row.joined },
            { key: 'city', title: 'City', render: (row) => row.city },
            {
              key: 'status',
              title: 'Status',
              render: (row) => <StatusBadge tone={row.status === 'Active' ? 'green' : 'red'}>{row.status}</StatusBadge>,
            },
          ]}
        />
      </Panel>
    </div>
  );
}
