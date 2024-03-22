import React from 'react'
import about from '../assets/about.jpg';
const TestimonialCard = () => {
    return (
        <div className='p-2 border- bg-white shadow-2xl'>
            <div className=' p-2'>
                <div className='flex items-center gap-4 '>
                    <img src={about} className='w-14 h-14 rounded-full object-fill' />
                    <p className='font-bold text-xl '>ljkvnsflvknsfvlknsfvn</p>
                </div>
                <p className='line-clamp-3 py-2'> 5 star experience with exceptional people!
                    The dune ride takes you back in time, don't miss
                    this experience!!! Great care for details, the
                    chosen place was superb, everything new, very good</p>
                <div className='py-2 flex justify-center items-center gap-2'>
                    <img src={about} className='w-24 h-24 rounded-xl'/>
                    <img src={about} className='w-24 h-24 rounded-xl'/>
                    <img src={about} className='w-24 h-24 rounded-xl'/>
                    <img src={about} className='w-24 h-24 rounded-xl'/>
                </div>
                <button className='text-sky-700 font-bold'> Read More {'>'} </button>
            </div>
        </div>
    )
}

export default TestimonialCard