import { Bracket } from "@/src/components/common/Bracket";
import LiveStream from "@/src/components/common/LiveStream";
import { useEffect, useState } from "react";

const steps = ['playoff', 'ottavi di finale', 'quarti di finale', 'semifinale', 'terzo e quarto posto', 'finale'];

export default function Index() {
    const [activePage, setActivePage] = useState('male');
    const [activeBracket, setActiveBracket] = useState(steps[0]);
    const [groupId, setGroupId] = useState(3);

    const handlePrevBracket = () => {
        if (activeBracket === steps[1]) {
            if (activePage === 'female') {
                return null;
            } else {
                setActiveBracket(steps[0]);
                setGroupId(3);
            }
        } else if (activeBracket === steps[2]) {
            if (activePage === 'female') {
                return null;
            } else {
                setActiveBracket(steps[1]);
                setGroupId(4);
            }
        } else if (activeBracket === steps[3]) {
            setActiveBracket(steps[2]);
            if (activePage === 'female') {
                setGroupId(9);
            } else {
                setGroupId(6);
            }
        } else if (activeBracket === steps[4]) {
            setActiveBracket(steps[3]);
            if (activePage === 'female') {
                setGroupId(10);
            } else {
                setGroupId(7);
            }
        } else if (activeBracket === steps[5]) {
            setActiveBracket(steps[4]);
            if (activePage === 'female') {
                setGroupId(11);
            } else {
                setGroupId(8);
            }
        }
    }

    const handleNextBracket = () => {
        if (activeBracket === steps[0]) {
            setActiveBracket(steps[1]);
            setGroupId(4);
        } else if (activeBracket === steps[1]) {
            setActiveBracket(steps[2]);
            setGroupId(5);
        } else if (activeBracket === steps[2]) {
            setActiveBracket(steps[3]);
              if (activePage === 'female') {
                setGroupId(10);
            } else {
                setGroupId(6);
            }
        } else if (activeBracket === steps[3]) {
            setActiveBracket(steps[4]);
            if (activePage === 'female') {
                setGroupId(11);
            } else {
                setGroupId(7);
            }
        } else if (activeBracket === steps[4]) {
            setActiveBracket(steps[5]);
            if (activePage === 'female') {
                setGroupId(12);
            } else {
                setGroupId(8);
            }
        }
    }
    
    useEffect(() => {
        if (activePage === 'male') {
            setActiveBracket(steps[0]);
            setGroupId(3);
        } else {
            setActiveBracket(steps[2]);
            setGroupId(9);
        }
    }, [activePage]);

    return (
        <>
            <section className='max-w-container 2xl:max-w-container-xl py-16 mx-auto px-4'>

                <h2 className="text-2xl font-bold">Bracket del torneo</h2>

                {/* maschile and feminile switch */}
                <div className="flex justify-around border-2 rounded border-primary-dark mt-8 cursor-pointer ">
                    <div onClick={() => { setActivePage('male') }} className={`font-semibold ${activePage === "male" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`} >Maschili</div>
                    <div onClick={() => { setActivePage('female') }} className={`font-semibold ${activePage === "female" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `} >Feminili</div>
                </div>


                {/* slider */}
                <div className=" max-w-container  2xl:max-w-container-xl mx-auto">
                    {/* buttons */}
                    <div className="flex justify-between items-center mt-8">

                        {/* prev burron */}
                        <div className="cursor-pointer" onClick={() => { handlePrevBracket() }}>
                            {/* className={`${Object.keys(bracket).indexOf(activeBracket) === 0 ? "opacity-50" : 'cursor-pointer'}`} */}
                            <img src="/static/chevron-left.svg" alt="" />
                        </div>

                        {/* current bracket */}
                        <div className="text-2xl font-bold first-letter:uppercase">{activeBracket}</div>

                        {/* next button */}
                        <div className="cursor-pointer" onClick={() => { handleNextBracket() }} >
                            <img src="/static/chevron-right.svg" alt="" />
                        </div>
                    </div>

                    {/* brackets */}
                    <Bracket group_id={groupId} />
                </div>
            </section>
            <LiveStream />
        </>
    )
}