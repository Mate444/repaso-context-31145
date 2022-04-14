import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext('');

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState('');
  useEffect(() => {
    // Aca iria la logica de la request
    setUser('User');
  }, []);
  return <UserContext.Provider value={{
    user,
    setUser
  }}>
    {children}
  </UserContext.Provider>
}
