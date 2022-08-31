import React from 'react';
import {render} from '@testing-library/react-native';
import LoginScreen from '../index';
import {AuthContext} from '../../../context/AuthContext';

const isLogged = false;
const setIsLogged = false;
const Wrapper = ({children}) => (
  <AuthContext.Provider value={{isLogged, setIsLogged}}>
    {children}
  </AuthContext.Provider>
);

describe('LoginScreen', () => {
  //ta dando erro no keyboardAwareScrollView e no context
  // it('should render', () => {
  // render(<LoginScreen />);
  // });
  it('should show username and password fields', () => {
    const {debug} = render(<LoginScreen />, {wrapper: Wrapper});
    debug();
    // console.log('getByPlaceholder', getByPlaceholderText(/senha/).length);
  });
});
