import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { AppStore } from '../redux/store';
import { publicRoutes } from '../constants/routesConstants';

const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.id > 0 ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />
};

export default AuthGuard;