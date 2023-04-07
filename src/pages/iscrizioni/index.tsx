const GIOCATORI = [
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        email: 'leo_grazioliemaillungo@gmail.com',
        phone: '432-4324324',
        nickname: 'Delicious',
    },
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        email: 'leo_grazioli@gmail.com',
        phone: '432-4324324',
        nickname: 'Delicious',
    },
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        email: 'leo_grazioli@gmail.com',
        phone: '432-4324324',
        nickname: 'Delicious',
    }
];

const index = () => {
    const handleSubmit = () => {
        // manage axios call
    }

    return (
        <>
            <div className="px-4 pt-12 pb-8">
                <h2 className="text-4xl font-bold">Modulo di iscrizione torneo di <span className="text-primary">Calcio Splash</span></h2>
                <p className="mt-4">Compila il form per iscrivere la tua squadra al torneo della 23 edizione.</p>
            </div>
            <div className="px-4 pt-10 bg-gray-200">
                <h2 className='text-2xl font-bold'>Dettagli squadra</h2>
                <form onSubmit={handleSubmit}>
                    {/* CATEGORIES */}
                    <fieldset>
                        <legend className="pt-6 font-semibold">Categoria del torneo</legend>
                        <div className="mt-2">
                            <input
                                id='male_category'
                                type="radio"
                                name='category'
                            />
                            <label className="ms-2" htmlFor="category">Maschile</label>
                        </div>
                        <div className="mt-2">
                            <input
                                id='female_category'
                                type="radio"
                                name='category'
                            />
                            <label className="ms-2" htmlFor="category">Femminile</label>
                        </div>
                    </fieldset>

                    {/* NOME SQUADRA */}
                    <div className='flex flex-col mt-5'>
                        <label className="font-semibold" htmlFor="team_name">Nome della squadra</label>
                        <input
                            className='border p-3 mt-2'
                            id='team_name'
                            type="text"
                            name='team_name'
                            placeholder="Inseriesci il nome della squadra"
                        />
                    </div>

                    <div className="mt-5">
                        <label className="font-semibold" htmlFor="">Logo</label>
                        {/* Carica logo della squadra */}
                        {/* input type file nascosto che viene attivato da una label personalizzata perché pulsante dell'input non puoi modificarlo*/}
                        <div className="h-16 bg-white">
                            carica file
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl">Giocatori</h3>

                        {/* container */}
                        {/* scrollable container */}
                        <div className="flex">
                            {/* add player card */}
                            <div className="flex-1 border rounded-md bg-white p-8 max-w-[theme('spacing[60]')]">
                                <div>+</div>
                                <div>Aggiungi giocatore</div>
                                <div>fino a 10 per squadra</div>
                            </div>
                            {/* players cards */}
                            {
                                GIOCATORI.map((player) => (
                                    <div key={player.name} className="flex-1 ms-3 border rounded-md bg-white p-4 max-w-[theme('spacing[60]')]">
                                        {/* da aggiungere gli altri dati */}
                                        <div className="mt-3 font-semibold">{player.name}</div>
                                        <div className="font-semibold">{player.lastname}</div>
                                        <div className="text-sm leading-7 mt-4">
                                            <div>{player.date_of_birth}</div>
                                            <div>{player.email}</div>
                                            <div>instagram</div>
                                            <div>gia giocato al torneo :)</div>
                                        </div>

                                        {/* button */}
                                        <div className='text-center font-semibold border-[3px] border-primary rounded-full text-primary w-full py-2 mt-8 inline-block'> Modifica</div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        {/* checkbox acconsento dati */}
                    </div>

                    <button>Invia pre-iscrizione</button>
                </form>
            </div>
        </>
    )
}

export default index