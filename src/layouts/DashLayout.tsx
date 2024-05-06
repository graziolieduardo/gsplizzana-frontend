import Link from "next/link"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

type LayoutProps = {
    children: React.ReactNode
}

export const DashLayout = ({ children }: LayoutProps) => {

    const pathName = usePathname()

    return (
        <div className="h-[calc(100vh-80px)]  max-w-container 2xl:max-w-container-xl mx-auto px-16">

            <h2 className="font-bold text-3xl mt-14 ">Ciao, Nome </h2>
            <div className="md:flex mt-6">

                <div className="w-[450px] h-full font-semibold pr-16">
                    <ul className="">
                        <li className="py-4 pl-4 border-b"><Link href="/dashboard/profile"><IoPersonOutline className="inline mr-1 text-sm text-primary" /> <span className={`${ pathName?.includes('profile') ? 'border-b border-black' : "" }`}>I miei dati</span></Link></li>
                        <li className="py-4 pl-4 border-b"><Link href="/dashboard/squadra"><FaRegListAlt className="inline mr-1 text-primary" /> <span className={`${ pathName?.includes('squadra') ? 'border-b border-black' : "" }`}>La mia squadra</span> </Link></li>
                    </ul>
                </div>
                <div className="w-full min-h-[500px] border p-8 mt-12 md:mt-0 ">
                    
                        {children}

                </div>
            </div>
        </div>
    )
}
