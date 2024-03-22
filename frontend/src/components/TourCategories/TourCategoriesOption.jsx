import React from 'react'

const TourCategoriesOption = () => {
  const data = ["DesertSafari", "CityTours", "Layout", "Tickets", "OtherActivities"];
   return (
    <div className=''>
      {data.map((opt) => (
        <div className='px-2 pt-8'>
          <button className='hover:text-rose-800'>{opt}</button>
        </div>
      ))}
    </div>
  )
}

export default TourCategoriesOption