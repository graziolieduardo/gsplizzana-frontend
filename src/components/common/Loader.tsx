import { ClipLoader } from 'react-spinners';

export const Loader = () => {
    return (
        <div className='fixed flex justify-center items-center opacity-75 left-0 bottom-0 z-[100] h-screen w-screen bg-black'>
            <ClipLoader
                color={'white'}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
            />
        </div>
    )
}