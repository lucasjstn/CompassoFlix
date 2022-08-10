import React, {useState} from 'react';
import {createContext} from 'react';

export const AuthContext = createContext();

export function InfoProvider({children}) {
  const [isLogged, setIsLogged] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <AuthContext.Provider value={{color, setColor, isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
}
