import { Link } from 'react-router-dom';
import { Panel, SectionHeader } from '../components';

export function PageNotFound() {
  return (
    <div className="page-grid">
      <SectionHeader title="Page not found" subtitle="The requested route is not available in this static build." />
      <Panel title="Back to the dashboard">
        <p className="plain-copy">Use the sidebar or go back to the main dashboard page.</p>
        <Link to="/dashboard" className="cta-link">
          Open dashboard
        </Link>
      </Panel>
    </div>
  );
}
