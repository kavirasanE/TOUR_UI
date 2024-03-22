import React, { useState } from 'react'

const FAQTab = () => {
    const [open,setOpen] =useState(false)
    return (
        <div className='m-4 mx-20' >
            <div className='bg-white p-4 '>
                <button className='font-semibold' onClick={() => setOpen(!open)}>What sets us apart from other Desert Safaris operators in Abu Dhabi?</button>
                {open &&
                <>
                    <div className='border'></div>
                    <p className='py-5 px-4 gap-2 flex flex-col'>
                    <li>Thrilling 45-minute Dune Bashing with skilled drivers</li>
                    <li>Comfortable 4x4 Land Cruiser pickup/drop-off for your Abu Dhabi Desert Safaris</li>
                    <li>24/7 seamless and dedicated customer support</li>
                    <li>Hassle-free Desert Safaris Abu Dhabi booking and cancellation</li>
                    <li>Secure reservation with multiple payment options</li>
                    <li>Starlit desert barbecue for a memorable culinary adventure</li>
                    <li>Luxurious traditional camp, a perfect retreat after desert activities</li>
                    <li>Luxurious overnight stay, offering comfort and personalized service in the desert</li>
                </p> 
                </>
                }
                
            </div>
        </div>
    )
}

export default FAQTab