import React, { useCallback } from 'react'
import FAQTab from '../components/FAQTab'

const Faq = () => {
    const handleToggle = useCallback((e) => {
            
    },[]);
    return (
        <div className='bg-slate-100'>
        <div className='bg-zinc-500 text-white p-10 pt-48'>
                <p className='font-bold text-4xl pb-4'>Know about Desert Safari Abu Dhabi</p>
                <p className='font-bold '>Extreme Tourism is your one-stop travel agency that offers memorable and blissful tours and travels.</p>
            </div>
            {[...Array(20)].map((_, index) => (
                <FAQTab key={index}  handleToggle={handleToggle} />
            ))}
        </div>
    )
}

export default Faq