import axios from "axios";

const request = axios.create({
    baseURL: 'https://localhost:7233/api/',
});

export default request