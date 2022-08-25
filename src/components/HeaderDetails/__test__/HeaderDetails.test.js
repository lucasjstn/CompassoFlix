import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import HeaderDetails from '..';
import {apiImage, api} from '../../../service/api';
const baseURL = apiImage.defaults.baseURL;
jest.mock('../../../service/api');

jest.mock('react-native-youtube-iframe');
const onPress = jest.fn();
describe('HeaderDetails', () => {
  beforeEach(() => {
    api.post.mockClear();
  });
  describe('Componente renderizado', () => {
    it('Deve retornar a imagem do background se a url estiver correta', () => {
      const {getByA11yHint} = render(<HeaderDetails backdrop_path={"/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"} />);
      const img = getByA11yHint('banner de fundo');
      expect(img.props.source).toEqual({uri: `${baseURL}/w780/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg`});
    });
    it('Deve retornar a imagem do poster se a url estiver correta', async () => {
      const {getByA11yHint} = render(<HeaderDetails poster_path={"/FiqBRypTDyHzqcxdbpPb3ddFep.jpg"} />);
      const img = getByA11yHint('poster');
      expect(img.props.source).toEqual({uri: `${baseURL}/w342/FiqBRypTDyHzqcxdbpPb3ddFep.jpg`})
     
    });
  });
  describe('poster com funcionalidade de botão', () => {
    it('Deve retornar true se foi feita somente 1 chamada', async () => {
      const {getByA11yHint} = render(<HeaderDetails id={'610150'} />);
      const botao = getByA11yHint('poster com botao');
      await waitFor(() => {
        botao.props.onClick();
      });
      expect(api.get).toHaveBeenCalledTimes(1);
    });
    it('Deve retornar true se a url estiver correta', async () => {
      const {getByA11yHint} = render(<HeaderDetails id={'610150'} />);
      const botao = getByA11yHint('poster com botao');
      await waitFor(() => {
        botao.props.onClick();
      });
      expect(api.get).toHaveBeenCalledWith(
        '/movie/610150/videos?&language=en-US',
      );
    });
  });
});
