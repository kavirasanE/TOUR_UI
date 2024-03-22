import React from 'react'
import TourSidebar from '../components/TourPage/TourSidebar'
import TourFacility from '../components/TourPage/TourFacility'
import TourOverview from '../components/TourPage/TourOverview'
import TourImages from '../components/TourPage/TourImages'
import PackagesCard from '../components/TourPage/PackagesCard'
import TourCard from '../components/TourPage/TourCard'

const TourPage = () => {
    return (
        <div>
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
            <div className='mx-10'>
                <p className='font-bold text-lg mt-5 '> Most Popular Abhu Dhabi Safari Packages</p>
                <p>Best Luxury Safari Operators in Abu Dhabi with Desert Camping</p>
                <div className='grid grid-cols-4 gap-10'>
                {[...Array(4)].map((_, index) => (
                    <>
                        <PackagesCard />
                    </>
                ))}
                </div>
            </div>
            <div className='bg-gray-100 my-4 px-10 py-4'>
            <p className='font-bold text-lg mt-5'> City Sight-Seeing Tours</p>
                <p>A great Collection of our City tour packages</p>
                <div className='grid grid-cols-4 gap-10'>

                {[...Array(4)].map((_, index) => (
                    <>
                    <TourCard/>
                    </>
                ))}
                </div>

                 
            </div>
        </div>
    )
}

export default TourPage