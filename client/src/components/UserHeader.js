import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { formatUser } from '../utils/utils';
const UserHeader = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>Bienvenido {formatUser(user)}!</h1>
    </header>
  )
}

export default UserHeader;
