import {api} from '../../../api';

export const getContent = async (content, page = 1) => {
  let result;
  try {
    const result = await api.get(
      `/${content}/popular?&language=pt-BR&page=${page}`,
    );

    if (result != null) {
      return result?.data?.results;
    }
  } catch (error) {
    throw new Error(`Get Content Request: ${error}`);
  }

};


