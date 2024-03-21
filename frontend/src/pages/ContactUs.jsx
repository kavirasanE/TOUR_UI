import React from 'react'

export const ContactUs = () => {
    return (
        <div>
            <div className='bg-gray-400 text-white p-10 pt-48'>
                <p className='font-bold text-2xl'>LET'S TALK !</p>
                <p className='font-bold '>Extreme Tourism LLC</p>
                <p>Khalidiya tower, Mezzanine Floor, Room No. 32, Khalidiya, Abu Dhabi, United Arab Emirates.</p>
                <div className='justify-between flex pr-64 pt-4 pb-24 font-bold'>
                    <button>Facebook</button>
                    <button>324567645343</button>
                    <button>bookings@Extreme.asd</button>
                </div>
            </div>
            <div className='px-10'>
                <p className='font-bold pt-10 pb-5'>Contact Details</p>

                    <ul className='flex justify-between items-center px-5'>
                        <li>
                            <strong >Address</strong>
                            <p className='pt-5'>Extreme Tourism LLC</p>
                            <p>Khalidiya tower, Mezzanine Floor,</p>
                            <p>Room No. 32, Khalidiya,</p>
                            <p>Abu Dhabi, United Arab Emirates.</p>
                        </li>
                        <li>
                            <strong>General Inquiries</strong>
                            <p className='pt-5'>Help desk: +971 50 472 8001</p>
                            <p>Phone: +971 55 484 2001</p>
                            <p>Fax: 02 444 5880</p>
                            <p>Email: bookings@extremetours.ae</p>
                        </li>
                        <li>
                            <strong >Hours of Operation</strong>
                            <p className='pt-5'>ALL TIMES ARE IN GST - GULF STANDARD TIME</p>
                            <p>08.00 AM - 06 PM</p>
                            <p>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</p>
                        </li>
                    </ul>
            

            </div>
        </div>
    )
}
