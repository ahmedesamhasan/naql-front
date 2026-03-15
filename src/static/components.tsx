import type { ReactNode } from 'react';

export function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export function InfoCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <article className="info-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{hint}</span>
    </article>
  );
}

export function Panel({ title, children, compact = false }: { title: string; children: ReactNode; compact?: boolean }) {
  return (
    <section className={compact ? 'panel panel-compact' : 'panel'}>
      <div className="panel-head">
        <h4>{title}</h4>
      </div>
      {children}
    </section>
  );
}

export function StatusBadge({ children, tone }: { children: ReactNode; tone: 'green' | 'blue' | 'orange' | 'red' | 'slate' }) {
  return <span className={`status-badge status-${tone}`}>{children}</span>;
}

type Column<T> = {
  key: string;
  title: string;
  render: (row: T) => ReactNode;
};

export function DataTable<T>({ rows, columns }: { rows: T[]; columns: Column<T>[] }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{column.render(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MiniBars({ values }: { values: number[] }) {
  const maxValue = Math.max(...values);

  return (
    <div className="mini-bars" aria-label="Simple trend chart">
      {values.map((value, index) => (
        <span
          key={`${index}-${value}`}
          style={{ height: `${(value / maxValue) * 100}%` }}
          className="mini-bar"
        />
      ))}
    </div>
  );
}

export function DoughnutLegend({ items }: { items: { label: string; value: number; tone: string }[] }) {
  return (
    <div className="legend-list">
      {items.map((item) => (
        <div key={item.label} className="legend-item">
          <span className={`legend-dot legend-${item.tone}`}></span>
          <div>
            <strong>{item.label}</strong>
            <p>{item.value}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
