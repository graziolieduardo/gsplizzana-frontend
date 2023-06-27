import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            ciao {id}
        </>
    )
}