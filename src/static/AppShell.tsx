import { NavLink, Outlet, useLocation } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/trips', label: 'Trips' },
  { to: '/drivers', label: 'Drivers' },
  { to: '/users', label: 'Users' },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/coupons', label: 'Coupons' },
  { to: '/notifications', label: 'Notifications' },
  { to: '/profile', label: 'Profile' },
  { to: '/settings', label: 'Settings' },
];

const logoUrl = `${import.meta.env.BASE_URL}images/logo_arabic_3.svg`;

export function AppShell() {
  const location = useLocation();

  return (
    <div className="layout-shell">
      <aside className="sidebar-panel">
        <div className="brand-box">
          <img src={logoUrl} alt="DizieL logo" className="brand-logo" />
          <div>
            <p className="brand-kicker">Static admin demo</p>
            <h1>DizieL Dashboard</h1>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="page-shell">
        <header className="topbar-panel">
          <div>
            <p className="page-kicker">Ready for GitHub Pages</p>
            <h2>{location.pathname.replace('/', '') || 'dashboard'}</h2>
          </div>

          <div className="topbar-actions">
            <div className="status-pill">No backend required</div>
            <div className="profile-chip">
              <span className="profile-avatar">A</span>
              <div>
                <strong>Ahmed Esam</strong>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </header>

        <main className="content-panel">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
