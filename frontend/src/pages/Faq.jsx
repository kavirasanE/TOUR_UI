import React, { useCallback } from 'react'
import FAQTab from '../components/FAQTab'

const Faq = () => {
    const handleToggle = useCallback((e) => {
            
    },[]);
    return (
        <div className='bg-slate-600'>
            szdjvhsdlvnsdlvn
            {[...Array(20)].map((_, index) => (
                <FAQTab key={index}  handleToggle={handleToggle} />
            ))}
        </div>
    )
}

export default Faq