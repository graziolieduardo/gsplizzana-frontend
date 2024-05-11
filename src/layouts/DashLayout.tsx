import Link from "next/link"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type LayoutProps = {
    children: React.ReactNode
}

export const DashLayout = ({ children }: LayoutProps) => {

    const pathName = usePathname()
    const [user, setUser] = useState<any>()

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user') || ''))
        }
        // console.log(user);

    }, [])

    return (
        <div className="min-h-[calc(100vh-150px)] max-w-container 2xl:max-w-container-xl mx-4 md:mx-auto md:px-16 mb-4 ">

            <h2 className="font-bold text-3xl mt-14 ">Ciao, {user?.name} {user?.surname} </h2>
            <div className="md:flex justify-between mt-6 ">

                <div className="md:w-[450px] h-full font-semibold md:pr-16">
                    <ul className="flex-1">
                        <li className="py-4 pl-4 border-b"><Link href="/dashboard/profile"><IoPersonOutline className="inline mr-1 text-sm text-primary" /> <span className={`${pathName?.includes('profile') ? 'border-b border-black' : ""}`}>I miei dati</span></Link></li>
                        <li className="py-4 pl-4 border-b"><Link href="/dashboard/squadra"><FaRegListAlt className="inline mr-1 text-primary" /> <span className={`${pathName?.includes('squadra') ? 'border-b border-black' : ""}`}>La mia squadra</span> </Link></li>
                    </ul>
                </div>

                <div className="md:w-[745px] min-h-[500px] border p-8 mt-12 md:mt-0 ">

                    {children}

                </div>
            </div>
        </div>
    )
}
