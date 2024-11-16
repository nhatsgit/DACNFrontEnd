
import axios from "axios";


const request = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/`,
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
            sessionStorage.setItem('redirectAfterLogin', window.location.pathname + window.location.search);
            localStorage.removeItem('ACCESS_TOKEN');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default request;