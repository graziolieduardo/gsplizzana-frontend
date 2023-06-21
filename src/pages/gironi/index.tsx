import LiveStream from "@/src/components/common/LiveStream"
import Gironi from "@/src/components/common/Gironi"
import { useState } from "react"

const index = () => {

    const [activePage, setActivePage] = useState('male')

  return (
    <>
      <section className="px-4 py-12 max-w-container 2xl:max-w-container-xl mx-auto">
        <div>


          {/* maschile and feminile switch */}
          <div className="flex justify-around border-2 rounded border-primary-dark mb-4">
            <div onClick={() => { setActivePage('male') }} className={`font-semibold ${activePage === "male" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'} w-1/2 text-center py-2`} >Maschili</div>
            <div onClick={() => { setActivePage('female') }} className={`font-semibold ${activePage === "female" ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-white text-black'}  w-1/2 text-center py-2 `} >Feminili</div>
          </div>


          {
            activePage === "male" ?
              // to render maschile component 
              <div className="py-8 max-w-container 2xl:max-w-container-xl mx-auto">
                <Gironi url={ activePage }/>
              </div>
              :
              //to render feminile component
              <div className="py-8 max-w-container 2xl:max-w-container-xl mx-auto">
                <Gironi url={ activePage } />
              </div>
          }

        </div>
      </section >
      <LiveStream />
    </>
  )
}

export default index
