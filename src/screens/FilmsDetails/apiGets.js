import {useState, useEffect} from 'react';
import {api} from '../../service/api';

export default function getMovies(url) {
  const [data, setData] = useState();
  const [isLoad, setIsLoad] = useState(true);

  const get = async () => {
    await api
      .get(url)
      .then(res => {
        setData(res?.data);
      })
      .catch(err => {
        throw new Error(`deu erro aqui ô: ${err}`);
      })
      .finally(() => setIsLoad(false));
  };

  useEffect(() => {
    get();
  }, []);

  return {data, isLoad};
}
