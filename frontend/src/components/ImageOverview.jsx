import React from 'react'
import about from '../assets/about.jpg'
const ImageOverview = () => {
    return (
        <div>
        <div className='relative'>
            <img src={about} className='object-cover h-96 w-full'/>
            <p className='absolute inset-0 bg-opacity-50 bg-gray-900 '/>
            <p className='absolute bottom-40 text-4xl font-bold px-16 text-white'>Why Extreme Tourism</p>
            <p className='absolute bottom-16 text-md mr-64 text-xl font-semibold px-16  text-white'>Best Luxury Desert Safari Operators in Abu Dhabi with Abu Dhabi
                Desert Safari cost and more packages which is your one-stop
                travel agency that offers memorable and blissful tours and travels.</p>
        </div>
        </div>
    )
}

export default ImageOverview;