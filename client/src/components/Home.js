import { useContext } from "react";
import { UserContext } from '../context/UserContext';
import UserHeader from './UserHeader';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <UserHeader user={user}/>
        <p>Home view</p>
    { user !== 'User' ? <button onClick={() => setUser('User')}>Usuario</button> : null }
    { user !== 'Guest' ? <button onClick={() => setUser('Guest')}>Invitado</button> : null }
    { user !== 'Admin' ? <button onClick={() => setUser('Admin')}>Admin</button> : null }
    </div>
  )
}

export default Home;
