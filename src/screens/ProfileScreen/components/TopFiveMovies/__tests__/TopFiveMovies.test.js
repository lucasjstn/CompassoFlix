import React from 'react';
import {render} from '@testing-library/react-native';
import TopFiveMovies from '../index';


const mock = {
  results: [
    {
      adult: false,
      backdrop_path: '/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg',
      genre_ids: [16, 878, 12, 28, 10751],
      id: 718789,
      original_language: 'en',
      original_title: 'Lightyear',
      overview:
        'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
      popularity: 1801.241,
      poster_path: '/ox4goZd956BxqJH6iLwhWPL9ct4.jpg',
      release_date: '2022-06-15',
      title: 'Lightyear',
      video: false,
      vote_average: 7.283,
      vote_count: 1784,
      rating: 7.0,
    },
  ],
};

describe('TopFiveMovies', () => {
  describe('A propriedade isSeries foi passada como True', () => {
    it("Deve incluir 'séries' no título", () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={true}
          isRated={false}
          favoriteMovies={false}
          name={"John"}
          username={"John"}

        />,
      );
      expect(getByText('Séries Favoritas de John')).toBeTruthy();
    });
    it("Não deve incluir 'filmes' no título", () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={true}
          isRated={false}
        />,
      );
      expect(() => getByText('Filmes Favoritos de John')).toThrow();
    });
  });
  describe('A propriedade isSeries foi passada como False', () => {
    it("Deve incluir 'filmes' no título", () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={false}
          favoriteMovies={true}
          name={"John"}
          username={"John"}
        />,
      );
      expect(getByText('Filmes Favoritos de John')).toBeTruthy();
    });
    it("Não deve incluir 'séries' no título", () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={false}
        />,
      );
      expect(() => getByText('Séries Favoritas de John')).toThrow();
    });
  });
  describe('Deve mostrar uma image se a propriedade moviesList for passado', () => {
    it('Deve mostrar a imagem', () => {
      const {getByTestId} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={false}
        />,
      );
      expect(getByTestId('capa do filme')).toBeTruthy();
    });
    it('Não deve mostrar a imagem', () => {
      const {getByTestId} = render(
        <TopFiveMovies isSerie={false} isRated={false} />,
      );
      expect(() => getByTestId('capa do filme')).toThrow();
    });
  });
  describe('A propriedade isRated foi passada como true', () => {
    it('Deve mostrar no título que se trata do tópico de avaliações', () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={true}
          name="John"
          username={"John"}
        />,
      );
      expect(getByText('Avaliações de filmes recentes de John')).toBeTruthy();
    });
    it('Deve mostrar uma avaliação', () => {
      const {debug, getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={true}
        />,
      );
      //debug();
      expect(getByText('7.0/10')).toBeTruthy();
    });
    it('Deve mostrar uma estrela', () => {
      const {getByTestId} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={true}
        />,
      );
      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('A propriedade isRated foi passada como false', () => {
    it('Deve mostrar no título que  se trata do tópico de favoritos', () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={false}
          name="John"
          username={"John"}
        />,
      );
      expect(getByText('Filmes Favoritos de John')).toBeTruthy();
    });
    it('Não deve retornar algo', () => {
      const {getByText} = render(
        <TopFiveMovies
          moviesList={mock.results}
          isSerie={false}
          isRated={false}
        />,
      );
      expect(() => getByText('7/10')).toThrow();
    });
  });
});
