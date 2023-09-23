import React from 'react'
import Banner from '../components/home/Banners'

const Home = () => {
  return (
    <div className='w-full absolute mainSection bg-no-repeat overflow-x-hidden flex flex-col items-center justify-center'>
      
      {/* Main hero section (landing page) */}
      <div className='w-8/12 text-center flex flex-col items-center mt-52 justify-center gap-y-8'>
        <p className='w-8/12 text-white font-Roborto overflow-hidden font-extrabold h-32 text-6xl'> Connect and Coordinate During Calamities </p>
        <p className=' w-6/12 font-Roborto text-white overflow-hidden text-2xl'>RescueConnect is a Web Application that help rescue agencies 
          coordinate and display their locations during natural or man-made calamaties</p>
      </div>

      <div className='mt-20'>
        <Banner />
      </div>

    </div>

  )
}

export default Home

// Connect and Coordinate During Calamities
// RescueConnect is a Web Application that help rescue agencies coordinate and display their locations during natural or man-made calamaties