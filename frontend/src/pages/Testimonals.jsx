import React from 'react'
import ImageOverview from '../components/ImageOverview'
import TestimonialCard from '../components/TestimonialCard'

const Testimonals = () => {
  return (
    <div className='bg-slate-50 h-full'>
      <ImageOverview head={"Desert Safari Abu Dhabi Reviews"} overview={"Luxury Desert Safari Operators in Abu Dhabi with Abu Dhabi Desert Safari cost and more packages which is your one-stop travel agency that offers memorable and blissful tours and travels"} />    
       <p className='text-center font-bold text-2xl p-4'>Desert Safari in Abu Dhai Exper Review</p>
      <div className='grid grid-cols-2 gap-4 p-10'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className='flex justify-center items-center'>
      <button className='border border-gray-200 font-bold text-sm p-2 px-4 rounded-md bg-rose-700 hover:bg-rose-800 text-white'> View all reviews</button>
      </div>
    </div>
  )
}

export default Testimonals