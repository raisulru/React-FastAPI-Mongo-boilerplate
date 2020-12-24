import axios from 'axios';
import { apiBaseURL } from '../../settings';

const apiMiddleware = () => (next) => (action) => {
  next(action);

  const baseUrl = `${apiBaseURL.v1}`;
  const { api, file, successMessage, errorMessage } = action.meta || {};
  const { path, mockPath, method = 'GET', data } = action.payload || {};

  if (!api) {
    return;
  }

  if (api && !path) {
    throw new Error(`'path' not specified for api action ${action.type}`);
  }
  const url = mockPath ? mockPath : baseUrl + path;

  const header = {
    headers: { 'Content-Type': 'multipart/form-data' },
  }

  let requestObject;

  if (file) {
    requestObject = {
      method,
      url,
      data,
      header
    }
  } else {
    requestObject = {
      method,
      url,
      data
    }
  }
  
  return axios(requestObject)
    .then((res) => {
      next({
        type: `${action.type}_SUCCESS`,
        payload: res.data,
        meta: action.meta,
        successMessage: successMessage && successMessage
      });
      successMessage && console.log(successMessage);
    })
    .catch((error) => {
      console.error(error);

      let errorMsg = ''

      if (error.response) {

        if (error.response.data.error) {
          errorMsg = error.response.data.error.error_user_msg
        } else if (error.response.data.msg){
          errorMsg = error.response.data.msg
        } else {
          errorMsg = error.response
        }
      } else if (errorMessage) {
        errorMsg = errorMessage
      } else {
        errorMsg = 'Something went wrong'
      }
      console.error(errorMsg);
      
      next({
        type: `${action.type}_FAILED`,
        errorMsg: errorMsg
      });
    });
};

export default apiMiddleware;
