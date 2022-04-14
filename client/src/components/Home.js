import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserHeader from "./UserHeader";
import Button from './Button';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
     <UserHeader />
     { user !== 'User' ? <Button changeUser={setUser} user={'User'}/>: <p>Solo los Administradores o Invitados pueden acceder a este boton</p> }
     { user !== 'Admin' ? <Button changeUser={setUser} user={'Admin'}/> : <p>Solo los Usuarios y los Invitados pueden acceder a este boton</p> }
     { user !== 'Guest' ? <Button changeUser={setUser} user={'Guest'}/> : <p>Solo los Usuarios y los Administradores pueden acceder a este boton</p>}
    </div>
  )
}

export default Home;
