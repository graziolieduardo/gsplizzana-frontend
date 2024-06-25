import { useSignupContext } from "@/src/hooks/useSignupContext"
import Link from "next/link";
import { useEffect } from "react";

export default function Confirmation() {
    const { token, setToken } = useSignupContext();

    useEffect(() => {
        let token: any = localStorage.getItem('gsp-token');
        if (token) {
            setToken(token);
        } else {
            setToken(null);
        }
    }, []);

    return (
        <div className="sm:max-w-[450px] mx-auto pt-14 pb-8 px-10 rounded-md">
            <div className="flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gradient-to-r from-primary-dark to-primary text-white">&#10003;</div>

                <h2 className="text-3xl font-bold mt-6">Pre-iscrizione inviata</h2>

                <div className="mt-4">
                    <p className="text-secondary text-center font-light">Il tuo numero di iscrizione è: <span className="font-bold">{token}</span></p>
                </div>

                <p className="text-secondary text-center mt-4 font-light">Ricordati di portarlo con te a Lizzana il <span className="font-bold">13 Luglio ore 7.00</span> per completare l&apos;iscrizione.</p>

                <p className="text-secondary text-center mt-4 font-light">Scarica <span className="font-bold underline hover:text-primary-dark"><Link href={"https://drive.google.com/file/d/1JGyjCuAtSIDjb2llkIUi-LvJCEf9JUYP/view"} target="blank">qui</Link></span> i moduli per la privacy e portali compilati <span className="font-bold">da ogni membro della squadra</span>.</p>

                <p className="text-secondary text-center mt-4 font-light">Per qualsiasi problema o dubbio siamo a disposizione.</p>

                {/* <div className="mt-8 w-4/5">
                    <button className="block mx-auto rounded-full bg-gradient-to-r w-full lg:w-1/2 from-primary-dark to-primary py-2 text-white" >Chiudi</button>
                </div> */}
            </div>
        </div>
    )
}

