import './App.css';
import { UserProvider } from './context/UserContext';
import Home from './components/Home';

const App = () => {
  return (
    <div>
  <UserProvider>
    <Home />
  </UserProvider>  
    </div>
  );
}

export default App;
