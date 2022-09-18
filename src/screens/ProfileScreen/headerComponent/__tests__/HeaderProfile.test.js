import React, { useContext } from 'react';
import {render, waitFor} from '@testing-library/react-native';
import SupProfile from '..';
import { AuthContext } from '../../../../context/AuthContext'

const isLogged = false;
const setIsLogged = false;
const Wrapper = ({children}) => ( 
  <AuthContext.Provider value={{isLogged, setIsLogged}}>
    {children}
  </AuthContext.Provider>
)


describe('SupProfile', () => {
    it("Deve mostrar o botão sair", () => {
      const {getByText} = render(<SupProfile/>, {wrapper: Wrapper });
      expect(getByText('Sair')).toBeTruthy();
    });;
    it("Deve mostrar o icone de sair", () => {
      const {getByTestId} = render(<SupProfile/>, {wrapper: Wrapper });
      expect(getByTestId('leave')).toBeTruthy();
    });;
    it("Deve mostrar o texto Ver listas de filmes", () => {
      const {getByText} = render(<SupProfile/>, {wrapper: Wrapper });
      expect(getByText('Ver listas de filmes')).toBeTruthy();
    });; 
    it("Deve mostrar o nome Usuário caso nenhum nome seja encontrado", () => {
      const {getByText} = render(<SupProfile/>, {wrapper: Wrapper });
      expect(getByText('Usuário')).toBeTruthy();
    });; 
});