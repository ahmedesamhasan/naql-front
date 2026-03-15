import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './assets/index.css';
import { AppShell } from './static/AppShell';
import { DashboardPage } from './static/pages/DashboardPage';
import { DriversPage } from './static/pages/DriversPage';
import { NotificationsPage } from './static/pages/NotificationsPage';
import { ProfilePage } from './static/pages/ProfilePage';
import { SettingsPage } from './static/pages/SettingsPage';
import { TripsPage } from './static/pages/TripsPage';
import { UsersPage } from './static/pages/UsersPage';
import { VehiclesPage } from './static/pages/VehiclesPage';
import { CouponsPage } from './static/pages/CouponsPage';
import { PageNotFound } from './static/pages/PageNotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppShell />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },
        { path: 'dashboard', element: <DashboardPage /> },
        { path: 'trips', element: <TripsPage /> },
        { path: 'drivers', element: <DriversPage /> },
        { path: 'users', element: <UsersPage /> },
        { path: 'vehicles', element: <VehiclesPage /> },
        { path: 'coupons', element: <CouponsPage /> },
        { path: 'notifications', element: <NotificationsPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: '*', element: <PageNotFound /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
