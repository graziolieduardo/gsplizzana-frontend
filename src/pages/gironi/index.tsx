import LiveStream from "@/src/components/common/LiveStream"
import Gironi from "@/src/components/common/Gironi"
import { useState } from "react"
import { Title } from "@/src/components/common/Title"

const index = () => {

  const [activePage, setActivePage] = useState('male')

  return (
    <>
      <section className="px-4 max-w-container 2xl:max-w-container-xl mx-auto">

        {/* page title  */}
        <div className="flex gap-x-2 py-24">
          <div className="w-1/2">
            <Title variant={Title.variant.primary} > Scopri i <span className="text-primary">gironi</span> del torneo</Title>
            <p className="mt-8">E anche quest’anno per il torneo maschile ci sono 8 giorni da 4 squadre ciascuno e per il torneo femminile ci sono 4 gironi da 4 squadre. In aggiunta è stato organizzato anche un girone Rookie per agevolare le squadre new entry.</p>
          </div>
          <div className="w-1/2 h-[500px] bg-gray-200"></div>

        </div>

        {/* maschile and feminile switch */}
        <div className="flex justify-around border-2 rounded border-primary-dark mt-4">
          <div onClick={() => { setActivePage('male') }} className={`font-semibold ${activePage === "male" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`} >Maschili</div>
          <div onClick={() => { setActivePage('female') }} className={`font-semibold ${activePage === "female" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `} >Feminili</div>
        </div>

        {/* gironi container */}
        <div className="py-16 max-w-container 2xl:max-w-container-xl mx-auto">
          <Gironi url={activePage} />
        </div>
      </section >
      <LiveStream />
    </>
  )
}

export default index
