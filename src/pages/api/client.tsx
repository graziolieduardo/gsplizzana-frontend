import axios from 'axios';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GSPLIZZANA_API_ENDPOINT,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': '*',
    }
});

export default client;