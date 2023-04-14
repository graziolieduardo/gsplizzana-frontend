import axios from 'axios';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
});

export default client;