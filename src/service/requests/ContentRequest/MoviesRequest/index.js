import {api} from '../../../api';

// export function MoviesRequest() {
//   return null;
// }

// const [scroll, setScroll] = useState(false);
// const [movies, SetMovies] = useState('');
// const [pagina, SetPagina] = useState(1);
// const [metaNames, setMetaNames] = useState({
//   name: undefined,
//   username: 'none',
// });
// const [load, setLoad] = useState(true);

// //funcao pra ativar o scroll
// const scrollLoad = () => {
//   if (scroll) return null;

//   setScroll(true);
//   SetPagina(prev => prev + 1);
// };

// // requisicao de filme
export const getContent = async (content, page = 1) => {
  let result;
  try {
    const result = await api.get(
      `/${content}/popular?&language=pt-BR&page=${page}`,
    );

    if (result != null) {
      // console.log(result.data ? result.data : 'null');
      return result?.data.results;
    }
  } catch (error) {
    console.log(`Get Content Request: ${error}`);
  }
  // await api
  //   .get(`/movie/popular?&language=pt-BR&page=${page}`)
  //   .then(res => {
  //     const current = res.data.results;
  //     console.log(res?.data.results);
  //     // SetMovies(prev => [...prev, ...current]);
  //   })
  //   .catch(err => console.log(`Opa, erro nisso aqui ${err}`))
  //   .finally(() => {
  //     // setScroll(false);
  //     // setLoad(false);
  //   });
};

// const getMovies = async () => {
//   await api
//     .get(`/movie/popular?&language=pt-BR&page=${pagina}`)
//     .then(res => {
//       const current = res.data.results;
//       // console.log(res?.data.results);
//       SetMovies(prev => [...prev, ...current]);
//     })
//     .catch(err => console.log(`Opa, erro nisso aqui ${err}`))
//     .finally(() => {
//       setScroll(false);
//       setLoad(false);
//     });
// };
