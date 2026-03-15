import { Panel, SectionHeader } from '../components';

export function ProfilePage() {
  return (
    <div className="page-grid">
      <SectionHeader title="Profile" subtitle="Simple account block for demo delivery." />
      <div className="profile-grid">
        <Panel title="Account summary">
          <div className="profile-card-body">
            <div className="big-avatar">AE</div>
            <div>
              <strong>Ahmed Esam</strong>
              <p>System administrator</p>
              <p>ahmed@example.com</p>
            </div>
          </div>
        </Panel>

        <Panel title="Permissions">
          <ul className="details-list">
            <li>Read dashboard analytics</li>
            <li>Manage trips, users, and drivers</li>
            <li>Publish coupons and notifications</li>
            <li>Review static demo settings</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
