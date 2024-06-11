import axios from 'axios';

const client = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
});

// REQUEST INTERCEPTOR
client.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    function (error) {
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
const responseHandler = (response: any) => {
    return response;
};

const errorHandler = (error: any) => {
    if (error?.response?.status === 401) {
        // clear user to force logout in case of unauthorized
        localStorage.removeItem("user");
        // window.location.replace("/");
    }
    return Promise.reject(error);
};

client.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);


export default client;