import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { privateRoutes } from '../../constants/routesConstants';
import DashboardPage from './DashboardPage';
import RouteWithNotFound from '../../router/RouteWithNotFound';

const DashboardCommentsPage = lazy(() => import('./DashboardCommentsPage'));

const PrivateDashboard = () => {
  return (
    <div>
      <h1>DashBoard Admin</h1>
      <br />
      <RouteWithNotFound>
        <Route path='/' element={<Navigate to={privateRoutes.DASHBOARD} />} />
        <Route path={privateRoutes.DASHBOARD} element={<DashboardPage />} />
        <Route path={privateRoutes.DASHBOARD_COMMENTS} element={<DashboardCommentsPage />} />
      </RouteWithNotFound>
    </div>
  );
};

export default PrivateDashboard;