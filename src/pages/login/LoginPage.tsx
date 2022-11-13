import { useDispatch } from 'react-redux';
import { createUser, resetUser } from '../../redux/states/userState';
import { getMorty } from "../../services/authService";

const LoginPage = () => {
  const dispatch = useDispatch();

  const _getMorty = async () => {
    try {
      const morty = await getMorty();
      dispatch(createUser(morty));
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