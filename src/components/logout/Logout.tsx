import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../redux/states/userState';
import { AppStore } from '../../redux/store';

const Logout = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetUser());
  };

  return userState.id > 0 ?
    (
      <div >
        <button onClick={handleLogout}>Salir</button>
      </div >
    ) : null
    ;
};

export default Logout;