import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, resetUser } from '../../redux/states/userState';
import { getMorty } from "../../services/authService";
import { privateRoutes } from '../../constants/routesConstants';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _getMorty = async () => {
    try {
      const morty = await getMorty();
      dispatch(createUser(morty));

      navigate(privateRoutes.PRIVATE);
    } catch (error) {
      dispatch(resetUser());
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <br />
      <button onClick={_getMorty}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginPage;