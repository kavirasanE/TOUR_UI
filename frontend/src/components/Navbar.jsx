import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
   return (
      <div>
         <div className='flex justify-between items-center p-4 mx-10'>
            <div >
               <img src={logo} alt='logo' className='w-36' />
            </div>
            <div className='border border-gray-400 rounded-md '>
               <input placeholder="Search Package Here!" className='font-semibold text-sm outline-none p-2 relative mr-36' />
            </div>
            <div className='flex gap-5'>
               <button className='buttontheme'>EN/AED</button>
               <button className='buttontheme'>Let's Talk! 2345678 </button>
            </div>
         </div>
         <div className='flex mx-10 p-4 justify-between items-center'>
            <div className='flex gap-5 font-medium'>
               <Link to="/aboutcompany" className='hover:text-rose-800'>Tour Category</Link>
               <Link to="/aboutcompany" className='hover:text-rose-800'>About Company</Link>
               <Link to="/aboutcompany" className='hover:text-rose-800'>Combo Offers</Link>
               <Link to="/aboutcompany" className='hover:text-rose-800'>Testimonials</Link>
               <Link to="/aboutcompany" className='hover:text-rose-800'>Contact Us</Link>
            </div>
            <div className='flex mx-10 gap-5 font-semibold'>
               <p> FAQ</p>
               <p>Chat Now </p>
            </div>
         </div>
      </div>

   )
}

export default Navbar