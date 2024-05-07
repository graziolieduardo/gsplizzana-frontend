import { DashLayout } from '@/src/layouts/DashLayout'
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function squadra() {

    const router = useRouter();
    const [dynamicPath, setDynamicPath] = useState("");

    useEffect(() => {
        // Get the dynamic parameter from the pathname
        const path = router.asPath.split('/');
        const lastPath = path[path.length - 1];
        setDynamicPath(lastPath);
      }, [router.asPath]);

    return (
        <div>squadra {dynamicPath}</div>
    )
}


// layout 
squadra.getLayout = function getLayout(page: ReactElement) {
    return (
        <DashLayout>{page}</DashLayout>
    )
}