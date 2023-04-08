const ConfirmModal = () => {
    return (
        <div className="sm:max-w-[450px] bg-red-100 mx-auto pt-14 pb-8 px-10 rounded-md">
            <div className="flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-gradient-to-r from-primary-dark to-primary text-white">&#10003;</div>

                <h2 className="text-3xl font-bold mt-6">Pre-iscrizione inviata</h2>
                <p className="text-secondary text-center font-semibold mt-4">Ti aspettiamo a Lizzana il 29 aprole ore 7.00 per completare l&apos;iscrizione</p>

                <div className="mt-8 w-4/5">
                    <button className="block mx-auto rounded-full bg-gradient-to-r w-full lg:w-1/2 from-primary-dark to-primary py-2 text-white" >Chiudi</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal