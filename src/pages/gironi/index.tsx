import LiveStream from "@/src/components/common/LiveStream"

import { useState } from "react"

const index = () => {

  const [activePage, setActivePage] = useState('male')


  return (
    <>
      <section className="px-4 py-8 container mx-auto">
        <div>
          Gironi :)

          <div className="flex  gap-8 justify-around"> 
          <div onClick={() => {setActivePage('male')}} className="bg-blue-200" >Male 1</div>
          <div onClick={() => {setActivePage('female')}} className="bg-red-200" >Female 1</div>
        </div>

        {
        activePage === "male" ? 
        <div className="text-center text-4xl mt-4"> male!</div> 
        : 
        <div className="text-center text-4xl mt-4"> female!</div>}
         
        </div>
      </section >
      <LiveStream />
    </>
  )
}

export default index
