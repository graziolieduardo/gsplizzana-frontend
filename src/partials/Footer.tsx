
export const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black">
                    <div className="py-3 sm:py-8 leading-8">

                        {/* top */}
                        <div className="container text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary p-6 mb-5">
                            <h2 className="text-3xl font-bold ">GSP LIZZANA</h2>
                            <p>Via Panizza, 32 - Rovereto (TN) 38068</p>
                            <p>Email: gsp_lizzana@gmail.com</p>
                            <div className="flex">
                                <p>social</p>
                                <p>social</p>
                                <p>social</p>
                            </div>
                        </div>

                        {/* horizoltal rule */}
                        <div className="h-px bg-gray-50"></div>

                        {/* bottom */}
                        <div className="container px-6 text-white py-4">
                            <p>&#169; 2023 Gsp Lizzana | Privacy Policy - Cookie Policy </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
