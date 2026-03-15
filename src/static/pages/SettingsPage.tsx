import { Panel, SectionHeader } from '../components';

export function SettingsPage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Settings" subtitle="Static settings blocks that keep the dashboard complete and presentable." />
      <div className="settings-grid">
        <Panel title="Project mode">
          <ul className="details-list">
            <li>Frontend only</li>
            <li>Static data source</li>
            <li>GitHub Pages ready</li>
            <li>Fallback route included</li>
          </ul>
        </Panel>
        <Panel title="Publishing notes">
          <ul className="details-list">
            <li>Use <code>npm install --legacy-peer-deps</code></li>
            <li>Run <code>npm run deploy</code></li>
            <li>Choose the gh-pages branch in repository settings</li>
            <li>No backend environment variables are required</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
