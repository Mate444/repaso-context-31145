import { CreateContext, useState } from 'react';

const UserContext = CreateContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('User');

  return <UserContext.Provider value={{
    user,
    setUser
  }}>
    {children}
  </UserContext.Provider>
}
