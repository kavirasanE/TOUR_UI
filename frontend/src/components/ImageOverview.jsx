import React from 'react'
import about from '../assets/about.jpg'
const ImageOverview = ({head,overview}) => {

    return (
        <div>
        <div className='relative'>
            <img src={about} className='object-cover h-96 w-full'/>
            <p className='absolute inset-0 bg-opacity-50 bg-gray-900 '/>
            <p className='absolute bottom-40 text-4xl font-bold px-16 text-white'>{head}</p>
            <p className='absolute bottom-16 text-md mr-64 text-xl font-semibold px-16  text-white'>{overview}</p>
        </div>
        </div>
    )
}

export default ImageOverview;