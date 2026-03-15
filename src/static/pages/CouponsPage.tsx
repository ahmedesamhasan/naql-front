import { DataTable, Panel, SectionHeader, StatusBadge } from '../components';
import { coupons } from '../data';

export function CouponsPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Coupons" subtitle="Marketing preview with reusable coupon cards and clean tables." />
      <Panel title="Campaign codes">
        <DataTable
          rows={coupons}
          columns={[
            { key: 'code', title: 'Code', render: (row) => row.code },
            { key: 'discount', title: 'Discount', render: (row) => row.discount },
            { key: 'usage', title: 'Usage', render: (row) => row.usage },
            { key: 'expiresAt', title: 'Expires', render: (row) => row.expiresAt },
            {
              key: 'status',
              title: 'Status',
              render: (row) => {
                const tone = row.status === 'Running' ? 'green' : row.status === 'Draft' ? 'blue' : 'red';
                return <StatusBadge tone={tone}>{row.status}</StatusBadge>;
              },
            },
          ]}
        />
      </Panel>
    </div>
  );
}
