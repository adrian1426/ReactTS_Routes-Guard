import { Route, Navigate } from 'react-router-dom';
import { privateRoutes } from '../../constants/routesConstants';
import DashboardPage from './DashboardPage';
import DashboardCommentsPage from './DashboardCommentsPage';
const PrivateDashboard = () => {
  return (
    <div>
      <h1>DashBoard Admin</h1>
      <br />
      <Route path='/' element={<Navigate to={privateRoutes.DASHBOARD} />} />
      <Route path={privateRoutes.DASHBOARD} element={<DashboardPage />} />
      <Route path={privateRoutes.DASHBOARD_COMMENTS} element={<DashboardCommentsPage />} />
    </div>
  );
};

export default PrivateDashboard;