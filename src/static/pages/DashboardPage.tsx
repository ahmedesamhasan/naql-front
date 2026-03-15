import { DoughnutLegend, InfoCard, MiniBars, Panel, SectionHeader, DataTable, StatusBadge } from '../components';
import { quickNotes, revenueTrend, summaryCards, tripStatusShare, trips } from '../data';

export function DashboardPage() {
  return (
    <div className="page-grid">
      <SectionHeader
        title="Operations overview"
        subtitle="This version keeps the project visual, stable, and easy to publish as a static admin demo."
      />

      <div className="cards-grid">
        {summaryCards.map((card) => (
          <InfoCard key={card.label} label={card.label} value={card.value} hint={card.hint} />
        ))}
      </div>

      <div className="stats-grid">
        <Panel title="Revenue trend">
          <div className="chart-block">
            <MiniBars values={revenueTrend} />
            <div className="chart-copy">
              <strong>Best week</strong>
              <p>The last week closed with the highest completed trip value in this demo data.</p>
            </div>
          </div>
        </Panel>

        <Panel title="Trip status share">
          <div className="chart-side-by-side">
            <div className="fake-donut">
              <span>Trips</span>
            </div>
            <DoughnutLegend
              items={[
                { label: 'Completed', value: tripStatusShare[0], tone: 'green' },
                { label: 'In progress', value: tripStatusShare[1], tone: 'blue' },
                { label: 'Pending', value: tripStatusShare[2], tone: 'orange' },
                { label: 'Cancelled', value: tripStatusShare[3], tone: 'red' },
              ]}
            />
          </div>
        </Panel>
      </div>

      <Panel title="Recent trips">
        <DataTable
          rows={trips.slice(0, 5)}
          columns={[
            { key: 'id', title: 'ID', render: (row) => `#${row.id}` },
            { key: 'rider', title: 'Rider', render: (row) => row.rider },
            { key: 'driver', title: 'Driver', render: (row) => row.driver },
            {
              key: 'status',
              title: 'Status',
              render: (row) => {
                const tone = row.status === 'Completed' ? 'green' : row.status === 'In progress' ? 'blue' : row.status === 'Pending' ? 'orange' : 'red';
                return <StatusBadge tone={tone}>{row.status}</StatusBadge>;
              },
            },
            { key: 'amount', title: 'Amount', render: (row) => row.amount },
          ]}
        />
      </Panel>

      <Panel title="Quick notes" compact>
        <div className="notes-list">
          {quickNotes.map((note) => (
            <div key={note} className="note-card">
              {note}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
