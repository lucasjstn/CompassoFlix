import React from 'react';
import Favorite from '../index';
import {render} from '@testing-library/react-native';

describe('Favorite', () => {
  describe('O componente deve está renderizado', () => {
    it('Deve mostrar o componente', () => {
      const {getByA11yHint} = render(<Favorite />);
      expect(getByA11yHint('estrela para favoritar')).toBeTruthy();
    });
    it('Deve mostrar o icone da estrela', async () => {
      const {getByA11yHint} = render(<Favorite />);
      expect(getByA11yHint('Icone da estrela')).toBeTruthy();
    });
  });
});
