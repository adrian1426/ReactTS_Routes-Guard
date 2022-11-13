import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';
import { Roles } from '../models/RolesModel';
import { Outlet, Navigate } from 'react-router-dom';
import { publicRoutes } from '../constants/routesConstants';

interface Props {
  rol: Roles;
}

const RolGuard = (props: Props) => {
  const { rol } = props;
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol === rol ? <Outlet /> : <Navigate replace to={publicRoutes.LOGIN} />
};

export default RolGuard;