import Link from "next/link"

type LayoutProps = {
    children: React.ReactNode
}

export const DashLayout = ({ children }: LayoutProps) => {
    return (
        <div className="flex">
            <div className="w-[250px] h-[calc(100vh-84px)] bg-white text-primary font-bold boder border-r">
                <ul className="px-4 pt-20">
                    <li><Link href="/dashboard/teams"> aiuGHSIUA</Link></li>
                    <li><Link href="/dashboard/teams"> aiuGHSIUA</Link></li>
                    <li><Link href="/dashboard/teams"> aiuGHSIUA</Link></li>
                </ul>
            </div>
            <div className="w-full bg-gray-100">
                <div className=" bg-white h-[calc(100%-80px)] rounded-lg m-10 p-10 border">
                    {children}

                </div>
            </div>
        </div>
    )
}
