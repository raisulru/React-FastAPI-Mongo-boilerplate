import axios from 'axios';
import apiBaseURL from '../../settings';

const apiMiddleware = () => (next) => (action) => {
  next(action);

  const baseUrl = `${apiBaseURL.v1}`;
  const { api, successMessage, errorMessage } = action.meta || {};
  const { path, mockPath, method = 'GET', data } = action.payload || {};

  if (!api) {
    return;
  }

  if (api && !path) {
    throw new Error(`'path' not specified for api action ${action.type}`);
  }
  const url = mockPath ? mockPath : baseUrl + path;

  return axios({ method, url, data })
    .then((res) => {
      next({
        type: `${action.type}_SUCCESS`,
        payload: res.data,
        meta: action.meta,
      });
      successMessage && console.log(successMessage);
    })
    .catch((error) => {
      console.log(
        error.response.data.error || errorMessage || 'Something went wrong'
      );
      console.error(error);
      next({
        type: `${action.type}_FAILED`,
      });
    });
};

export default apiMiddleware;
