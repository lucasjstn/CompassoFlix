import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.defaults.params = {}
api.defaults.params[ 'api_key' ] = '6483151dfec6e35c01b29e2d1b76788f';

export const apiImage = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/'
});
