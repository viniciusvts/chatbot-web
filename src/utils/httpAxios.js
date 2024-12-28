import axios from 'axios';

// Interceptadores de requisição
function requestConfigInterceptor(config) {
    return config;
}

function requestErrorInterceptor(error) {
    return Promise.reject(error);
}

// Interceptadores de resposta
function responseConfigInterceptor(config) {
    return config;
}
function responseErrorInterceptor(error) {
    return Promise.reject(error);
}

const httpAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
});
httpAxios.interceptors.request.use(requestConfigInterceptor, requestErrorInterceptor);
httpAxios.interceptors.response.use(responseConfigInterceptor, responseErrorInterceptor);

export default httpAxios;
