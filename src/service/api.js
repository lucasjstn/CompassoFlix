import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '6483151dfec6e35c01b29e2d1b76788f'
    }
})
export const apiImage = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/',
    params: {
        api_key: '6483151dfec6e35c01b29e2d1b76788f'
    }
})

