import React from 'react'
import about from "../../assets/about.jpg"
const PackagesCard = () => {
    return (
        <div className='mt-5'>
            <div className='w-56 relative'>
                <img src={about}  className='w-56 h-40 rounded-t-xl '/>
                <p className='absolute left-2 top-2  text-xs px-2 py-0.5 rounded-sm bg-gray-100'>Most popular </p>
                <p className='flex justify-between m-2'>Instant Confirmation <span className='text-yellow-500'>4.9</span></p>
                <h1 className='font-bold mt-2 text-nowrap truncate'>Most Popular Abhu Dhabi Safari </h1>
                <p className='line-clamp-3 text-sm my-4'>There is seating for 6 guests + 1 driver. The seats are as follows: 1 next to the driver, 3 in the middle row and 2 in the back row.</p>
                <p className='text-sm'>From</p>
                <p className='font-bold text-lg'>AED 250 / <span className='font-light text-sm'> Sharing Transfer </span> </p>
            </div>
        </div>
    )
}

export default PackagesCard