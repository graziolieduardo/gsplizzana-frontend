import client from '@/src/pages/api/client';
import RegisterModal from '@/src/components/RegisterModal';
import { useSignupContext } from '@/src/hooks/useSignupContext';
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineInstagram, AiOutlineCalendar, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import Head from 'next/head';

const PLAYERS = [
    {
        name: 'Eduardo',
        lastname: 'Grazioli',
        date_of_birth: '04/07/1991',
        phone: '3209141742',
        email: 'eduardo.grazioli@gmail.it',
        instagram_tag: 'graziolieduardo',
        nickname: 'Indesiderabile numero uno',
        isCaptain: true,
    }
]

const Index = () => {
    const router = useRouter();

    // state
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [error, setError] = useState('');
    const [modifyIndex, setModifyIndex] = useState<null | number>(null);

    // context
    const { team_name, category, players, setCategory, setTeamName, removePlayer, setToken, resetPlayers } = useSignupContext();

    const { register, setValue, handleSubmit, trigger, formState: { errors } } = useForm();

    const handleRadioChange = (e: any) => {
        setCategory(e.target.value);
    }

    const handlePrivacyChange = (e: any) => {
        setValue('privacy', e.target.checked);
    }

    const handleRulesChange = (e: any) => {
        setValue('rules', e.target.checked);
    }

    const handleAddPlayer = () => {
        setModifyIndex(null);
        setIsRegisterOpen(true);
    }

    const handleModify = (index: any) => {
        setModifyIndex(index);
        setIsRegisterOpen(true);
    }

    const onSubmit = async (data: any, e: any) => {
        e.preventDefault();
        // console.log(data);

        if (players.length < 4 || players.length > 9) {
            setError('- La squadra deve contenere minimo 4 e massimo 9 giocatori');
            return;
        } else {
            setError('');
        }

        const params = {
            team_name,
            category,
            players
        }

        try {

            const res = await client.post('sign-up', params);

            setToken(res.data.confirmation_token);
            resetPlayers();
            router.push('/iscrizioni/confirmation');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setValue('players', JSON.stringify(players));
    }, [players]);

    // useEffect(() => {
    //     console.log(errors);
    // }, [errors]);

    return (
        <>
            <Head>
                <title>GSP Lizzana | Iscrizioni</title>
            </Head>
            {isRegisterOpen && <RegisterModal setIsRegisterOpen={setIsRegisterOpen} modifyIndex={modifyIndex} />}

            <div className="container mx-auto">
                <div className="px-6 pt-12 pb-8 w-full sm:w-1/2">
                    <h2 className="text-4xl font-bold">Modulo di iscrizione torneo di <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary">Calcio Splash</span></h2>
                    <p className="mt-4 text-secondary">Compila il form per iscrivere la tua squadra al torneo della 23 edizione.</p>
                </div>
            </div>
            <div className=" py-10 bg-gray-200">
                <div className="container mx-auto px-6">

                    <h2 className='text-2xl font-bold'>Dettagli squadra</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* CATEGORIES */}
                        <fieldset>
                            <legend className="pt-6 font-semibold">Categoria del torneo</legend>
                            <div className="mt-2">
                                <input
                                    className='cursor-pointer'
                                    {...register('category', { required: '- questo campo è obbligatorio' })}
                                    id='male_category'
                                    type="radio"
                                    name='category'
                                    value='maschile'
                                    onChange={handleRadioChange}
                                />
                                <label className="ms-2 text-secondary cursor-pointer" htmlFor="male_category">Maschile</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className='cursor-pointer'
                                    {...register('category', { required: '- questo campo è obbligatorio' })}
                                    id='female_category'
                                    type="radio"
                                    name='category'
                                    value='femminile'
                                    onChange={handleRadioChange}
                                />
                                <label className="ms-2 text-secondary cursor-pointer" htmlFor="female_category">Femminile</label>
                            </div>
                            <ErrorMessage
                                errors={errors}
                                name="category"
                                render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                            />
                        </fieldset>

                        {/* NOME SQUADRA */}
                        <div className='flex flex-col mt-5'>
                            <label className="font-semibold" htmlFor="team_name">Nome della squadra</label>
                            <input
                                {...register('team_name', { required: '- questo campo è obbligatorio' })}
                                className='border p-3 mt-2 w-full sm:w-1/2 lg:w-1/3 rounded'
                                id='team_name'
                                type="text"
                                name='team_name'
                                placeholder="Inseriesci il nome della squadra"
                                value={team_name}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="team_name"
                                render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                            />
                        </div>

                        {/* LOGO */}
                        {/* <div className="mt-5">
                            <label className="font-semibold" htmlFor="">Logo</label>
                            <div className="flex h-16 bg-white w-full sm:w-1/2 lg:w-1/3 mt-2 p-3 rounded">
                                <div className="image-upload h-10">
                                    <label htmlFor="file-input">
                                        <img className='h-full' src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png" />
                                    </label>

                                    <input className='hidden' id="file-input" type="file" />
                                </div>

                                <div className='ml-3'>
                                    <div className="font-semibold">Carica logo squadra</div>
                                    <div className='text-xs text-secondary'>Formati supportati .jpg, .png, .svg</div>
                                </div>
                            </div>
                        </div> */}

                        <div className='mt-8'>
                            <h3 className="text-xl">Giocatori</h3>
                            <div className="overflow-x-scroll rounded-md">
                                {/* container */}
                                {/* scrollable container */}
                                <div className="inline-flex h-[350px]">
                                    {/* add player card */}
                                    <div className="hover:border-primary-dark hover:border-2 cursor-pointer minwd border rounded-md bg-white p-8 flex flex-col justify-center items-center" onClick={() => handleAddPlayer()}>
                                        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-r from-primary-dark to-primary text-white">
                                            <img className='text-xs' src="/static/plus.svg" alt="" />
                                        </div>
                                        <div className="mt-4 font-semibold text-lg">Aggiungi giocatore</div>
                                        <small className='text-secondary'>fino a 9 per squadra</small>
                                    </div>
                                    {/* players cards */}
                                    {
                                        players.map((player, index) => (
                                            <>
                                                <div key={index} className="flex flex-col maxwd flex-1 ms-3 border rounded-md bg-white p-4 grow w-60">
                                                    {/* cestino */}
                                                    <div className="flex justify-end text-right cursor-pointer" onClick={() => removePlayer(index)}>
                                                        <img className='border rounded-full p-2' src="/static/trash.svg" alt="" />
                                                    </div>

                                                    <div className='flex flex-1 flex-col justify-between'>
                                                        <div>

                                                            {/* da aggiungere gli altri dati */}
                                                            <div>
                                                                <div className="font-semibold text-xl first-letter:uppercase">{player?.name}</div>
                                                                <div className="font-semibold text-xl first-letter:uppercase">{player?.lastname} {player?.isCaptain && '(C)'}</div>
                                                            </div>
                                                            <div className="text-sm leading-7 mt-4">
                                                                <div className='flex items-center gap-x-1'>
                                                                    <div className='text-primary w-4'>
                                                                        <AiOutlineCalendar />
                                                                    </div>
                                                                    <span>
                                                                        {player?.date_of_birth}
                                                                    </span>
                                                                </div>
                                                                <div className='flex items-center gap-x-1'>
                                                                    <div className='text-primary w-4'>
                                                                        <AiOutlinePhone />
                                                                    </div>
                                                                    <span>
                                                                        {player?.phone}
                                                                    </span>
                                                                </div>
                                                                {
                                                                    player?.email &&
                                                                    <div className='flex items-center gap-x-1'>
                                                                        <span className='text-primary w-4'>
                                                                            <AiOutlineMail />
                                                                        </span>
                                                                        <span className='flex-1'>
                                                                            {player?.email}
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {
                                                                    player?.instagram &&
                                                                    <div className='flex items-center gap-x-1'>
                                                                        <span className='text-primary w-4'>
                                                                            <AiOutlineInstagram />
                                                                        </span>
                                                                        <span className='flex-1'>
                                                                            {player?.instagram}
                                                                        </span>
                                                                    </div>
                                                                }
                                                                {/* <div className='flex items-center gap-x-1'>
                                                                    <span>
                                                                        ho già giocato al torneo
                                                                    </span>
                                                                    <span className='text-primary'>
                                                                        <BsHandThumbsUp />
                                                                    </span>
                                                                </div> */}
                                                                {
                                                                    player?.nickname &&
                                                                    <div className='flex items-center gap-x-1'>
                                                                        <span className='text-primary'>
                                                                            <AiOutlineUser />
                                                                        </span>
                                                                        <span>
                                                                            {player?.nickname}
                                                                        </span>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* button */}
                                                        <div className="cursor-pointer flex self-end justify-center align-center w-full rounded-full bg-gradient-to-r from-primary-dark to-primary p-0.5 mt-6" onClick={() => handleModify(index)}>
                                                            <div className="h-full w-full bg-white rounded-full text-center text-primary font-semibold py-2">
                                                                Modifica
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            {error.length > 0 && <p className='text-primary-dark'>{error}</p>}
                        </div>

                        <div className="mt-2">
                            {/* checkbox acconsento dati */}
                            <input {...register('privacy', { required: '- questo campo è obbligatorio' })} className='cursor-pointer' type="checkbox" name="" id="personal-data" onChange={handlePrivacyChange} />
                            <label className="ms-2 text-secondary cursor-pointer" htmlFor="personal-data">Acconsento il trattamento dei dati personali</label>
                            <ErrorMessage
                                errors={errors}
                                name="privacy"
                                render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                            />
                        </div>

                        <div className="mt-2">
                            {/* checkbox acconsento dati */}
                            <input {...register('rules', { required: '- questo campo è obbligatorio' })} className='cursor-pointer' type="checkbox" name="" id="rules" onChange={handleRulesChange} />
                            <label className="ms-2 text-secondary cursor-pointer" htmlFor="rules">Ho letto e accetto il <span className='font-bold underline'>REGOLAMENTO DEL TORNEO</span></label>
                            <ErrorMessage
                                errors={errors}
                                name="rules"
                                render={({ message }: any) => <p className='text-primary-dark'>{message}</p>}
                            />
                        </div>

                        <div className="mt-10">
                            <button className="block rounded-full bg-gradient-to-r from-primary-dark to-primary w-full sm:w-72 py-2 mt-8 text-white" >Invia pre-iscrizione</button>
                        </div>
                    </form>

                </div>


            </div>
            {/* <RegisterModal /> */}
            {/* <ConfirmModal /> */}
        </>
    )
}

export default Index