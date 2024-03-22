import React from 'react'
import TourCategoriesResults from '../components/TourCategories/TourCategoriesResults'
import TourCategoriesOption from '../components/TourCategories/TourCategoriesOption'

const TourCategory = () => {
  return (
    <div className='flex max-h-full'>
         <div className='bg-gray-200 px-5 font-bold  h-auto'>
            <TourCategoriesOption/>
         </div>
         <div className='grid grid-cols-3'>
            <TourCategoriesResults/>
         </div> 
       
    </div>
  )
}

export default TourCategory