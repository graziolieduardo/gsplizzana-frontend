import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type registerParams = {
    name: string,
    surname: string,
    username: string,
    bithdate: Date,
    email: string,
    password: string,
    password_confirmation: string,
}

export default function useRegister() {
    const registration = useMutation(async (params: registerParams) => {
        return await axios.post('https://api.gsplizzana.it/api/register', params);
    });

    return { registration }
}