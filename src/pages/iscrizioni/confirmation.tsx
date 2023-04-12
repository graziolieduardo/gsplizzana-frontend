import { useSignupContext } from "@/src/hooks/useSignupContext"
import Link from "next/link";

export default function confirmation() {
    const { token } = useSignupContext();

    return (
        <div className="sm:max-w-[450px] mx-auto pt-14 pb-8 px-10 rounded-md">
            <div className="flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gradient-to-r from-primary-dark to-primary text-white">&#10003;</div>

                <h2 className="text-3xl font-bold mt-6">Pre-iscrizione inviata</h2>
                <p className="text-secondary text-center mt-4 font-light">Il tuo numero di iscrizione è: <span className="font-bold">{token}</span></p>
                <p className="text-secondary text-center mt-4 font-light">Ricordati di scaricare <span className="font-bold underline hover:text-primary-dark"><Link href={"https://pdfhost.io/v/Pxsk.zjwf_Liberatoria_GDPR_GSP"} target="blank">qui</Link></span> i moduli per la privacy e portali compilati il giorno dell'iscrizione.</p>
                <p className="text-secondary text-center mt-4 font-light">Ti aspettiamo a Lizzana il <span className="font-bold">29 aprile ore 7.00</span> per completare l'iscrizione.</p>

                {/* <div className="mt-8 w-4/5">
                    <button className="block mx-auto rounded-full bg-gradient-to-r w-full lg:w-1/2 from-primary-dark to-primary py-2 text-white" >Chiudi</button>
                </div> */}
            </div>
        </div>
    )
}

