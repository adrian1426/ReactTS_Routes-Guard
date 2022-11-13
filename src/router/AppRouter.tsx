import { lazy } from 'react';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../constants/routesConstants';
import AuthGuard from '../guard/AuthGuard';
import RouteWithNotFound from './RouteWithNotFound';

const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const PrivateDashboard = lazy(() => import('../pages/dashboard/PrivateDashboard'))

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