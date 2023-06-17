import LiveStream from "@/src/components/common/LiveStream"
import { useState } from "react"

const index = () => {

  const [activePage, setActivePage] = useState('male')

  return (
    <>
      <section className="px-4 py-8 container mx-auto">
        <div>
          

          {/* maschile and feminile switch */}
          <div className="flex justify-around border-2 rounded border-primary-dark">
            <div onClick={() => { setActivePage('male') }} className={`font-semibold ${activePage === "male" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`} >Maschili</div>
            <div onClick={() => { setActivePage('female') }} className={`font-semibold ${activePage === "female" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `} >Feminili</div>
          </div>


          {
            activePage === "male" ?
              // to render maschile component 
              <div className="text-center text-4xl mt-4"> male!</div>
              :
              //to render feminile component
              <div className="text-center text-4xl mt-4"> female!</div>}

        </div>
      </section >
      <LiveStream />
    </>
  )
}

export default index
