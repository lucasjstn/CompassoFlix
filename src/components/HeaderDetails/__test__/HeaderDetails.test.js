import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import HeaderDetails from '..';
import {apiImage, api} from '../../../service/api';
import mockFilmsDetails from '../../../mocks/filmsDetails';
import mockSeriesDetails from '../../../mocks/seriesDetails';

const baseURL = apiImage.defaults.baseURL;
jest.mock('../../../service/api');

jest.mock('react-native-youtube-iframe');
const id = '610150';
const poster_url = '/FiqBRypTDyHzqcxdbpPb3ddFep.jpg';
const backdrop = '/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg';
const quartozeChar = '12345678901234';
const quinzeChar = '123456789012345';

const mockCrew = [
  {
    adult: false,
    gender: 2,
    id: 568322,
    known_for_department: 'Directing',
    name: 'Dan Trachtenberg',
    original_name: 'Dan Trachtenberg',
    popularity: 3.666,
    profile_path: '/ce3rCLjSPyvq89D9kd2pyIlLny1.jpg',
    credit_id: '5fb8259e6c8492003f26dc9e',
    department: 'Directing',
    job: 'Director',
  },
];

const mockCreatAt = [
  {
    id: 1319310,
    credit_id: '602ecedfdd731b003d0b7a9b',
    name: 'Jessica Gao',
    gender: 1,
    profile_path: '/u7HvgxVCqxeHnzBLIpyqRYf7bIt.jpg',
  },
];

describe('HeaderDetails', () => {
  describe('Componente renderizado', () => {
    describe('imagens do filme ou série', () => {
      it('Deve retornar a imagem do background se a url estiver correta', () => {
        const {getByA11yHint} = render(
          <HeaderDetails backdrop_path={backdrop} />,
        );
        const img = getByA11yHint('banner de fundo');
        expect(img.props.source).toEqual({uri: `${baseURL}/w780${backdrop}`});
      });
      it('Deve retornar a imagem do poster se a url estiver correta', () => {
        const {getByA11yHint} = render(
          <HeaderDetails poster_path={poster_url} />,
        );
        const img = getByA11yHint('poster');
        expect(img.props.source).toEqual({uri: `${baseURL}/w342${poster_url}`});
      });
    });

    describe('título do filme ou série', () => {
      it('Deve continuar mostrando o titulo e mostar titulo estendido ao pressLongTitle', async () => {
        const {getByText, getAllByText} = render(
          <HeaderDetails title={'hello world!'} />,
        );

        const title = getByText('hello world!');
        await waitFor(() => {
          title.props.onLongPress();
        });
        expect(getAllByText('hello world!')).toBeTruthy();
      });
      it('Deve mostrar o titulo sem redicencias', () => {
        const {getByText} = render(<HeaderDetails title={quartozeChar} />);
        expect(getByText(quartozeChar)).toBeTruthy();
      });
    });
    describe('nome do diretor se isSerie for false', () => {
      it('Deve mostrar o nome do diretor', () => {
        const {getByText} = render(
          <HeaderDetails director={mockCrew} isSerie={false} />,
        );
        expect(getByText('Dan Trachtenberg')).toBeTruthy();
      });
      it('Deve mostrar o nome Diretor não encontrado se director não for encontrado', () => {
        const {getByText} = render(
          <HeaderDetails
            isSerie={false}
            directorDefault={mockFilmsDetails.header.directorDefault}
          />,
        );
        expect(getByText('Diretor não encontrado')).toBeTruthy();
      });
    });
    describe('nome do criador se isSerie for true', () => {
      it('Deve mostrar o nome do criador', () => {
        const {getByText} = render(
          <HeaderDetails director={mockCreatAt[0]} isSerie={true} />,
        );
        expect(getByText('Jessica Gao')).toBeTruthy();
      });
      it('Deve mostrar o nome Diretor não encontrado se director não for encontrado', () => {
        const {getByText} = render(
          <HeaderDetails
            isSerie={true}
            directorDefault={mockSeriesDetails.header.directorDefault}
          />,
        );
        expect(getByText('Criador não identificado')).toBeTruthy();
      });
    });
    describe("Formatação do rated e da popularidade", () => {
      it("Deve retorna 8.5 se eu passar 8.547214", () => {
        const {getByText} = render(
          <HeaderDetails
            vote_average={8.547214}
          />,
        );
        expect(getByText("8.5/10").props.children[0]).toBe("8.5")
      })
      it("Deve retorna 7.4k se eu passar 7472.908", () => {
        const {getByText} = render(
          <HeaderDetails
            popularity={7472.908}
          />,
        );
        expect(getByText("7.4k").props.children).toBe("7.4k")
      })
    })
  });
  describe('poster com funcionalidade de botão', () => {
    it('Deve retornar true se foi feita somente 1 chamada', async () => {
      const {getByA11yHint} = render(<HeaderDetails id={id} />);
      const botao = getByA11yHint('poster com botao');
      await waitFor(() => {
        botao.props.onClick();
      });
      expect(api.get).toHaveBeenCalledTimes(1);
    });
    it('Deve retornar true se a url estiver correta', async () => {
      const {getByA11yHint} = render(<HeaderDetails id={id} />);
      const botao = getByA11yHint('poster com botao');
      await waitFor(() => {
        botao.props.onClick();
      });
      expect(api.get).toHaveBeenCalledWith(
        `/movie/${id}/videos?&language=en-US`,
      );
    });
  });
});
