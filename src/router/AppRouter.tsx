import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../constants/routesConstants';
import AuthGuard from '../guard/AuthGuard';
import PrivateDashboard from '../pages/dashboard/PrivateDashboard';
import LoginPage from '../pages/login/LoginPage';
import RouteWithNotFound from './RouteWithNotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouteWithNotFound>
        <Route path='/' element={<Navigate to={privateRoutes.PRIVATE} />} />
        <Route path={publicRoutes.LOGIN} element={<LoginPage />} />

        <Route element={<AuthGuard />}>
          <Route path={`${privateRoutes.PRIVATE}/*`} element={<PrivateDashboard />} />
        </Route>
      </RouteWithNotFound>
    </BrowserRouter>
  );
};

export default AppRouter;