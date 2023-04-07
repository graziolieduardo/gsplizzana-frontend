const GIOCATORI = [
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        phone: '432-4324324',
        nickname: 'Vaca',
    },
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        phone: '432-4324324',
        nickname: 'Vaca',
    },
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        phone: '432-4324324',
        nickname: 'Vaca',
    }
];

const index = () => {
    const handleSubmit = () => {
        // manage axios call
    }

    return (
        <>
            <div>
                {/* descrizione della pagina */}
            </div>
            <div className="p-4 bg-gray-200">
                <h2 className='text-2xl'>Dettagli squadra</h2>
                <form onSubmit={handleSubmit}>
                    {/* CATEGORIES */}
                    <fieldset>
                        <legend>Categoria del torneo</legend>
                        <div>
                            <input
                                id='male_category'
                                type="radio"
                                name='category'
                            />
                            <label htmlFor="category">maschile</label>
                        </div>
                        <div>
                            <input
                                id='female_category'
                                type="radio"
                                name='category'
                            />
                            <label htmlFor="category">femminile</label>
                        </div>
                    </fieldset>

                    {/* NOME SQUADRA */}
                    <div className='flex flex-col'>
                        <label htmlFor="team_name">Nome della squadra</label>
                        <input
                            className='border'
                            id='team_name'
                            type="text"
                            name='team_name'
                        />
                    </div>

                    <div>
                        {/* Carica logo della squadra */}
                        {/* input type file nascosto che viene attivato da una label personalizzata perché pulsante dell'input non puoi modificarlo*/}
                    </div>

                    <div>
                        <h3 className="text-xl">Giocatori</h3>

                        {/* container */}
                        {/* scrollable container */}
                        <div className="flex">
                            {/* add player card */}
                            <div className="flex-1 border bg-white rounded">
                                <div>+</div>
                                <div>Aggiungi giocatore</div>
                                <div>fino a 10 per squadra</div>
                            </div>
                            {/* players cards */}
                            {
                                GIOCATORI.map((player) => (
                                    <div className="flex-1 border bg-white rounded">
                                        <div>{player.name}</div>
                                        <div>{player.lastname}</div>
                                        {/* da aggiungere gli altri dati */}
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