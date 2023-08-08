import LiveStream from "@/src/components/common/LiveStream"
import Gironi from "@/src/components/common/Gironi"
import { useEffect, useState } from "react"
import { Title } from "@/src/components/common/Title"
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from "querystring";

const index = () => {

    const router = useRouter()
    const { slug } = router.query
    const [activePage, setActivePage] = useState<ParsedUrlQuery | string | string[]>('')

    useEffect(() => {
        if (slug) setActivePage(slug)
    }, [slug])

    return (
        <>
            <section className="px-4 max-w-container 2xl:max-w-container-xl mx-auto">

                {/* page title  */}
                <div className="flex gap-x-2 pt-24 pb-12">
                    <div className="md:w-1/2">
                        <Title variant={Title.variant.primary}>Scopri i <span className="text-primary">gironi</span> del torneo</Title>
                        <p className="mt-8">E anche quest’anno per il torneo maschile ci sono 8 giorni da 4 squadre ciascuno e per il torneo femminile ci sono 4 gironi da 4 squadre. In aggiunta è stato organizzato anche un girone Rookie per agevolare le squadre new entry.</p>
                    </div>
                    <div className="hidden md:block md:w-1/2 h-[500px] bg-gray-200"></div>

                </div>

                {/* maschile and femminile switch */}
                <div className="pt-12">
                    <div className="flex justify-around border-2 rounded border-primary-dark cursor-pointer">
                        <div onClick={() => { router.push('/gironi/maschile', undefined, { shallow: true }) }} className={`font-semibold ${activePage === "maschile" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`}>Maschile</div>
                        <div onClick={() => { router.push('/gironi/femminile', undefined, { shallow: true }) }} className={`font-semibold ${activePage === "femminile" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `}>Femminile</div>
                    </div>
                </div>

                {/* gironi container */}
                <div className="py-16 max-w-container 2xl:max-w-container-xl mx-auto">
                    <Gironi />
                </div>
            </section >
            <LiveStream />
        </>
    )
}

export default index
