import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../constants/routesConstants';
import AuthGuard from '../guard/AuthGuard';
import PrivateDashboard from '../pages/dashboard/PrivateDashboard';
import LoginPage from '../pages/login/LoginPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={privateRoutes.PRIVATE} />} />
        <Route path='*' element={<h1>Not Found Page</h1>} />
        <Route path={publicRoutes.LOGIN} element={<LoginPage />} />

        <Route element={<AuthGuard />}>
          <Route path={`${privateRoutes.PRIVATE}/*`} element={<PrivateDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;