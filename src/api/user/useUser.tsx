import client from '../client';

export default function useUser() {
    const getUser = async () => {
        return await client.get('https://api.gsplizzana.it/api/user')
    }

    return { getUser }
}
