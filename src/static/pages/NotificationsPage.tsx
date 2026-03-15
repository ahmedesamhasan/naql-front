import { DataTable, Panel, SectionHeader, StatusBadge } from '../components';
import { notifications } from '../data';

export function NotificationsPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Notifications" subtitle="Prepared notifications that keep the interface alive without a messaging service." />
      <Panel title="Broadcast history">
        <DataTable
          rows={notifications}
          columns={[
            { key: 'title', title: 'Title', render: (row) => row.title },
            { key: 'audience', title: 'Audience', render: (row) => row.audience },
            { key: 'channel', title: 'Channel', render: (row) => row.channel },
            { key: 'sentAt', title: 'Time', render: (row) => row.sentAt },
            {
              key: 'status',
              title: 'Status',
              render: (row) => <StatusBadge tone={row.status === 'Sent' ? 'green' : 'blue'}>{row.status}</StatusBadge>,
            },
          ]}
        />
      </Panel>
    </div>
  );
}
