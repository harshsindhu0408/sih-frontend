import React from 'react'

const ImageCard = (data) => {
  return (
    <div className='bg-gray-100 rounded-md shadow-lg w-[300px] h-[400px] flex flex-col items-center justify-center gap-y-6'>
        <div className='w-11/12'><img src={data.data.img} alt='profile-pic' className='cursor-pointer object-cover'/></div>
        <p className='text-2xl font-bold mb-6 overflow-hidden text-black font-Roborto opacity-80 text-center'>{data.data.name}</p>
    </div>
  )
}

export default ImageCard
