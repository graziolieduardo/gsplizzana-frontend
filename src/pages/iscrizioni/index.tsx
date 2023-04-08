import RegisterModal from '@/src/components/RegisterModal';
import { useSignupContext } from '@/src/hooks/useSignupContext';
import axios from 'axios';

const GIOCATORI = [
    {
        name: 'Leo',
        lastname: 'Grazioli',
        date_of_birth: '30/11/1992',
        email: 'leo_grazioliemaillungo@gmail.commmmm',
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
    const { setCategory, setPlayers, setTeamName } = useSignupContext();

    const handleRadioChange = (e: any) => {
        setCategory(e.target.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.post('http://gsplizzana-api.test/api/sign-up');

        console.log(res);
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="px-4 pt-12 pb-8 w-full sm:w-1/2">
                    <h2 className="text-4xl font-bold">Modulo di iscrizione torneo di <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary">Calcio Splash</span></h2>
                    <p className="mt-4">Compila il form per iscrivere la tua squadra al torneo della 23 edizione.</p>
                </div>
            </div>
            <div className=" py-10 bg-gray-200">
                <div className="container mx-auto px-4">

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
                                    value='maschile'
                                    onChange={handleRadioChange}
                                />
                                <label className="ms-2" htmlFor="category">Maschile</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id='female_category'
                                    type="radio"
                                    name='category'
                                    value='femminile'
                                    onChange={handleRadioChange}
                                />
                                <label className="ms-2" htmlFor="category">Femminile</label>
                            </div>
                        </fieldset>

                        {/* NOME SQUADRA */}
                        <div className='flex flex-col mt-5'>
                            <label className="font-semibold" htmlFor="team_name">Nome della squadra</label>
                            <input
                                className='border p-3 mt-2 w-full sm:w-1/2 lg:w-1/3'
                                id='team_name'
                                type="text"
                                name='team_name'
                                placeholder="Inseriesci il nome della squadra"
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                        </div>

                        <div className="mt-5">
                            <label className="font-semibold" htmlFor="">Logo</label>
                            {/* Carica logo della squadra */}
                            {/* input type file nascosto che viene attivato da una label personalizzata perché pulsante dell'input non puoi modificarlo*/}
                            <div className="flex h-16 bg-white w-full sm:w-1/2 lg:w-1/3 mt-2 p-3">

                                {/* icon */}
                                <div className="image-upload h-10">
                                    <label htmlFor="file-input">
                                        <img className='h-full' src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png" />
                                    </label>

                                    <input className='hidden' id="file-input" type="file" />
                                </div>

                                {/* "label" */}
                                <div className='ml-3'>
                                    <div className="font-semibold">Carica logo squadra</div>
                                    <div className='text-xs text-secondary'>Formati supportati .jpg, .png, .svg</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 overflow-x-scroll  ">
                            <h3 className="text-xl">Giocatori</h3>

                            {/* container */}
                            {/* scrollable container */}
                            <div className="inline-flex">
                                {/* add player card */}
                                <div className="minwd border rounded-md bg-white p-8 flex flex-col justify-center items-center ">
                                    <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r from-primary-dark to-primary text-white">+</div>
                                    <div className="mt-4 font-semibold text-lg">Aggiungi giocatore</div>
                                    <small>fino a 10 per squadra</small>
                                </div>
                                {/* players cards */}
                                {
                                    GIOCATORI.map((player, index) => (
                                        <div key={index} className="maxwd flex-1 ms-3 border rounded-md bg-white p-4 grow w-60 relative">
                                            {/* cestino in position absolute (manca l'immagine testa di hamburger) */}
                                            <div className="absolute right-4">lixo</div>

                                            {/* da aggiungere gli altri dati */}
                                            <div className="mt-3 font-semibold text-xl">{player.name}</div>
                                            <div className="font-semibold text-xl">{player.lastname}</div>
                                            <div className="text-sm leading-7 mt-4">
                                                <div>{player.date_of_birth}</div>
                                                <div>{player.email}</div>
                                                <div>instagram</div>
                                                <div>{player.nickname}</div>
                                                <div>gia giocato al torneo :)</div>
                                            </div>

                                            {/* button */}
                                            <div className="flex justify-center align-center w-full rounded-full bg-gradient-to-r from-primary-dark to-primary p-0.5 mt-6">
                                                <div className="h-full w-full bg-white rounded-full text-center text-primary font-semibold py-2">
                                                    Modifica
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mt-2">
                            {/* checkbox acconsento dati */}
                            <input type="checkbox" name="" id="personal-data" />
                            <label className="ms-2" htmlFor="personal-data">Acconsento il trattamento dei dati personali</label>
                        </div>

                        <div className="mt-10">
                            <button className="block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full sm:w-72 py-2 mt-8 text-white" >Invia pre-iscrizione</button>
                        </div>
                    </form>

                </div>


            </div>
            <RegisterModal />
        </>
    )
}

export default index