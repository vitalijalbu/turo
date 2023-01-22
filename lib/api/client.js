import axios from 'axios';

const initialState = {
  jwt: typeof window !== "undefined" ? window.localStorage.getItem('jwt') : false,
  user: typeof window !== "undefined" ? window.localStorage.getItem('user') : false,
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + initialState.jwt
  },
});

export const instance_public = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});
 


export const setSession = ({jwt, user}) => {
  if (typeof window !== 'undefined') {
    if(jwt)
    {
        localStorage.setItem('jwt', jwt);
    } 
    if(user)
    {
        localStorage.setItem('user', JSON.stringify(user));
    }
    
  }
};
/*
export const refreshSession = ({jwt, user}) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', data.jwt);
    localStorage.setItem('user', JSON.stringify(user));
  //instance.defaults.headers['Authorization'] = 'Bearer ' + jwt;
  }
};
*/
export const getSession = () => {

    if(initialState.user !== null && initialState.jwt !== 'undefined'){
      return initialState;
      //console.log('initialState', JSON.stringify(initialState.jwt))
    }else{
      return null;
      //console.log('initialState',  JSON.stringify(initialState.jwt))
    }
    return initialState;
};

export const removeSession = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('user');
};
/*
if (localStorage.getItem('auth_jwt')) {
  instance.defaults.headers['Authorization'] =
    'Bearer ' + localStorage.getItem('auth_jwt');
}

const isValidResponse = (res) => {
  return typeof res !== 'string';
};

instance.interceptors.response.use(
  (response) => {
    if (response.data.success === false || response.data.error === true) {
      return Promise.reject(response.data);
    }
    // TODO: Remove when it will be fixed in backend
    if (!isValidResponse(response.data)) {
      return Promise.reject({
        success: false,
        message: 'Response is invalid!!',
      });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);

export const setInstanceHeader = (name, value) => {
  instance.defaults.headers[name] = value;
};
*/
export default instance;