import {useState, useEffect} from 'react';
import {api} from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function getMovies(url) {
  const [data, setData] = useState();
  const [isLoad, setIsLoad] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage?.getItem('@session');
      if (value !== null) {
        get(value)
      }
    } catch (e) {
      throw new Error(e)
    }
  };

  const get = async (sessionId) => {
    await api
      .get(url + sessionId)
      .then(res => {
        setData(res?.data);
      })
      .catch(err => {throw new Error(`deu erro aqui ô: ${err}`)})
      .finally(() => setIsLoad(false))
  };

  useEffect(() => {
    getData()
  }, [])

  return {data, isLoad};
}
