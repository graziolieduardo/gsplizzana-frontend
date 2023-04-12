import Link from "next/link"

export const Header = () => {
    return (
        <>
            <header className="bg-black h-[72px]">
                <div className="container mx-auto px-6 py-4">
                    <Link href="/" className="cursor-pointer">
                        <img className="w-24" src="/static/logo-arancione.svg" alt="" />
                    </Link>
                </div>
            </header>
        </>
    )
}
