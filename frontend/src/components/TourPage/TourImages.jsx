import React from 'react'
import about from '../../assets/about.jpg'
const TourImages = () => {
  return (
   
        <div className='relative'>
            <img src={about} className='object-cover h-96 w-full rounded-3xl'/>
            <p className='absolute inset-0 bg-opacity-50 bg-gray-900 rounded-3xl'/>
            <p className='absolute bottom-40 text-4xl font-bold px-10 text-white'>Abu Dhabi Sunrise Desert Safari</p>
            <p className='absolute bottom-16 text-md text-xl font-semibold px-16  text-white'>Sunrise Desert Tour lets you experience the majestic morning with this exclusive sunrise Desert tour Abu Dhabi.</p>
        </div>
    
  )
}

export default TourImages