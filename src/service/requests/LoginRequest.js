import {api} from '../api';

//primeira requisicao pra request token
export const RequestToken = async () => {
  try {
    const response = await api.get(`/authentication/token/new?`);
    return response.data.request_token;
  } catch (error) {
    console.log('   :', error);
  }
};

export const LoginRequest = async (username, password, requestToken) => {
  try {
    const validateToken = await api.post(
      `/authentication/token/validate_with_login?`,
      {
        username: username,
        password: password,
        request_token: requestToken,
      },
    );
    return validateToken?.data.request_token;
  } catch (error) {
    console.log(error);
  }
};

export const CreateSession = async requestToken => {
  try {
    const sessionResult = await api.post('/authentication/session/new?', {
      request_token: requestToken,
    });
    return sessionResult?.data.session_id;
  } catch (error) {
    // console.log('   :', error);
  }
};

// .then(res => {
//   setRequestToken(res?.data.request_token);
//   console.log(res?.data.request_token);
// })
// .catch(err => console.log(err));
