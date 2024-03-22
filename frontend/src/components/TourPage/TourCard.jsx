import React from 'react'
import about from "../../assets/about.jpg"
const TourCard = () => {
    return (
        <div className='mt-5'>
            <div className='w-64'>
                <img src={about} className='w-64 h-60 rounded-xl' />
                <h1 className='font-bold  text-nowrap truncate mt-4'>Dubai Tour From Abu Dhabi</h1>
                <p className='text-sm '>Duration <span className='text-rose-800 font-bold text-lg'>10 Hrs</span></p>
            </div>
        </div>
    )
}

export default TourCard
