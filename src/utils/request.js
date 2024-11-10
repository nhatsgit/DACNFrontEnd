
import axios from "axios";


const request = axios.create({
    baseURL: 'https://localhost:7233/api/',
});

request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            config.headers['Authorization'] = '';
        }
        return config;
    },
    (error) => Promise.reject(error)
);

request.interceptors.response.use(
    response => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
            localStorage.removeItem('ACCESS_TOKEN');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default request;