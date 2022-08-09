import React, {createContext, useContext, useState} from 'react';
import Router from '../routes/Router';
import SignIn from '../screens/SingIn';

const Auth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const AuthContext = createContext();
  return (
    <AuthContext.Provider logged={isLogged} setLogged={setIsLogged}>
      <Router />
      <SignIn />
    </AuthContext.Provider>
  );
};

export default Auth;
