import React from 'react'

const TourSidebar = () => {
    return (
        <div className='flex flex-col mt-10 gap-10'>
            <div className='flex border flex-col p-4 w-64 bg-slate-100'>
                <p className='font-bold text-gray-400'>From</p>
                <p className='font-bold text-2xl'>AED 1000</p>
                <p className='text-sm font-semibold mt-2'>Private - For 6 Person</p>
                <p className='text-sm font-light mb-4'>(Incl. VAT)</p>
                <button className='border border-gray-200 shadow-xl h  font-bold text-sm p-2 px-4 rounded-md bg-rose-700 hover:bg-rose-800 text-white'>Book Now</button>
            </div>
            <div className=' border-2 flex flex-col justify-center items-center py-10'>
                <p>Need <span className='text-rose-800'>Help?</span></p>
                <p className='font-bold mt-5'>+98765432123</p>
                <p className='font-bold'>booking@ertyu.ae</p>
                <p className='text-sm font-light mt-5'>24/7 Live Support</p>
            </div>
        </div>
    )
}

export default TourSidebar