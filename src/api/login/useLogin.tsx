import { useMutation } from '@tanstack/react-query';
import client from '../client';

type loginParams = {
    email: string,
    password: string
}

export default function useLogin() {
    const login = useMutation(async (params: loginParams) => {
        return await client.post('http://api.gsplizzana.it/api/login', params);
    });

    return { login }
}