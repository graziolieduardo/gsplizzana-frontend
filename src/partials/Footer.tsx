import Link from "next/link"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Title } from "../components/common/Title";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black">
                    <div className="sm:py-8 leading-8">

                        {/* top */}
                        <div className="max-w-container 2xl:max-w-container-xl mx-auto py-6 px-4 mb-5 md:flex md:justify-between">
                            <div className="text-primary">
                                <Title variant={Title.variant.tertiary}>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary">GSP LIZZANA</span>
                                </Title>

                                <p>Via Panizza, 32 - Rovereto (TN) 38068</p>
                                <p>lizzanagsp@gmail.com</p>

                                <div className="flex gap-x-4 mt-2">

                                    {/* instagram link */}
                                    <Link href={'https://instagram.com/gsplizzana?igshid=MjljNjAzYmU='} target="blank">
                                        <BsInstagram className=" text-2xl" />
                                    </Link>

                                    {/* whatsapp link */}
                                    <Link href={'https://wa.me/+393518614137'} target="blank">
                                        <BsWhatsapp className="text-2xl" />
                                    </Link>
                                </div>
                            </div>

                            {/* <nav className="text-white mt-12 md:mt-0">
                                <ul className=' font-semibold capitaliza text-sm space-y-3'>

                                    <li>
                                        <Link href='/programma' className=''>Programma</Link>
                                    </li>

                                    <li>
                                        <Link href='/gironi/maschile' className=''>Gironi</Link>
                                    </li>

                                    <li>
                                        <Link href='/bracket/maschile' className=''>Fase finale</Link>
                                    </li>

                                    <li>
                                        <Link href='/marcatori' className=''>Marcatori</Link>
                                    </li>
                                </ul>
                            </nav> */}

                        </div>

                        {/* horizoltal rule */}
                        <div className="h-px bg-gray-50"></div>

                        {/* bottom */}
                        <div className="max-w-container 2xl:max-w-container-xl mx-auto px-4 text-white py-4">
                            <p>&#169; 2024 Gsp Lizzana</p>
                            {/* <p>&#169; 2023 Gsp Lizzana | Privacy Policy - Cookie Policy </p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
