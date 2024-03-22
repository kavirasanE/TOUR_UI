import React from 'react'
import TourSidebar from '../components/TourPage/TourSidebar'
import TourFacility from '../components/TourPage/TourFacility'
import TourOverview from '../components/TourPage/TourOverview'
import TourImages from '../components/TourPage/TourImages'

const TourPage = () => {
    return (
        <div className='max-w-screen flex justify-between items-start px-10'>
            <div className=' mr-5'>
                <p className='pt-4 text-3xl font-bold'>Sunrise Desert Safari Abu Dhabi</p>
                <p className='py-4 gap-5 flex'><span className='text-yellow-400 '>4.9</span> Instant confirmation </p>
                <TourImages />
                <TourFacility />
                <TourOverview />
                <h1 className='font-bold text-2xl mb-3'>Book Sunrise Desert Safari Abu Dhabi</h1>
                <button className='border border-gray-200 shadow-xl h  font-bold text-sm p-2 px-4 rounded-md bg-rose-700 hover:bg-rose-800 text-white'>Book Now</button>
            </div>
            <div>
                <TourSidebar />
            </div>
        </div>
    )
}

export default TourPage