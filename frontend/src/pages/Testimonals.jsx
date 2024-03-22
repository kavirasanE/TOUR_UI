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
    </div>
  )
}

export default Testimonals