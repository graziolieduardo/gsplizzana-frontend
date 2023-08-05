import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
});

export default client;