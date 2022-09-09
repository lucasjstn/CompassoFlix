import {api} from '../../../api';

export const getContent = async (content, page = 1) => {
  try {
    const result = await api.get(
      `/${content}/popular?&language=pt-BR&page=${page}`,
    );

    if (result != null) {
      return result?.data?.results;
    }
  } catch (error) {
    console.log(error);
  }
};

export const ListOfSelectedMovies = async id => {
  try {
    const result = await api.get(`/list/${id}?&language=pt-BR`);
    if (result != null) {
      return result?.data.items;
    }
  } catch (error) {}
};

export const RemoveMovieFromList = async id => {
  try {
    const result = await api.delete(`/list/`);
    if (result != null) {
      return result?.data?.results;
    }
  } catch (error) {}
};
