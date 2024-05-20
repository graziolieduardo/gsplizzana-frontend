import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type loginParams = {
    email: string,
    password: string
}

export default function useLogin() {
    const login = useMutation(async (params: loginParams) => {
        return await axios.post('https://api.gsplizzana.it/api/login', params);
    });

    return { login }
}