import React from 'react'
import about from '../../assets/about.jpg'
const TourCategoriesResults = () => {
    const TourCategoriesResultsData = [
        {
            id: 1,
            image: about,
            topic: "Sunrise Desert Safari Abu Dhabi",
            price: "From AED 1000/",
            option: "Private Transfer"
        },
        {
            id: 2,
            image: about,
            topic: "Evening Dhow Cruise Dubai Marina",
            price: "From AED 150/",
            option: "Buffet Dinner"
        },
        {
            id: 3,
            image: about,
            topic: "Dubai City Tour",
            price: "From AED 200/",
            option: "Guided Tour"
        },
        {
            id: 4,
            image: about,
            topic: "Abu Dhabi City Tour",
            price: "From AED 250/",
            option: "Sightseeing"
        },
        {
            id: 5,
            image: about,
            topic: "Red Dune Bashing Dubai",
            price: "From AED 300/",
            option: "Adventure Tour"
        },
        {
            id: 6,
            image: about,
            topic: "Burj Khalifa At The Top",
            price: "From AED 350/",
            option: "Observation Deck"
        },
        {
            id: 7,
            image: about,
            topic: "Ferrari World Abu Dhabi",
            price: "From AED 400/",
            option: "Theme Park Entry"
        },
        {
            id: 8,
            image: about,
            topic: "Dubai Marina Yacht Rental",
            price: "From AED 450/",
            option: "Private Yacht Charter"
        },
        {
            id: 9,
            image: about,
            topic: "Liwa Overnight Safari Abu Dhabi",
            price: "From AED 500/",
            option: "Camping Experience"
        },
        {
            id: 10,
            image: about,
            topic: "Dolphin Watching Musandam",
            price: "From AED 550/",
            option: "Boat Tour"
        },
        {
            id: 11,
            image: about,
            topic: "Yas Waterworld Abu Dhabi",
            price: "From AED 600/",
            option: "Water Park Ticket"
        },
        {
            id: 12,
            image: about,
            topic: "Dubai Desert Conservation Reserve",
            price: "From AED 650/",
            option: "Nature Reserve Tour"
        },
        {
            id: 13,
            image: about,
            topic: "Louvre Abu Dhabi Museum",
            price: "From AED 700/",
            option: "Art Museum Ticket"
        },
        {
            id: 14,
            image: about,
            topic: "Wild Wadi Water Park Dubai",
            price: "From AED 750/",
            option: "Water Park Entry"
        },
        {
            id: 15,
            image: about,
            topic: "Dubai Marina Dinner Cruise",
            price: "From AED 800/",
            option: "Fine Dining Experience"
        },
        {
            id: 16,
            image: about,
            topic: "Qasr Al Watan Palace Abu Dhabi",
            price: "From AED 850/",
            option: "Palace Tour"
        },
        {
            id: 17,
            image: about,
            topic: "Al Ain Zoo",
            price: "From AED 900/",
            option: "Zoo Admission"
        },
        {
            id: 18,
            image: about,
            topic: "Jebel Hafeet Mountain",
            price: "From AED 950/",
            option: "Mountain Hiking"
        },
        {
            id: 19,
            image: about,
            topic: "Dubai Aquarium & Underwater Zoo",
            price: "From AED 1000/",
            option: "Aquarium Ticket"
        },
        {
            id: 20,
            image: about,
            topic: "Sharjah Arts Museum",
            price: "From AED 1050/",
            option: "Art Gallery Admission"
        }
    ];
        
    return (
        <>
         { TourCategoriesResultsData.map((tours,index) => (

        <div key={index} className='flex p-4 justify-start items-start'>
            <img src={tours.image} className='object-cover w-14 h-14 rounded-md mt-2' />
            <div className='w-64  px-3'>
                <p className='font-semibold text-nowrap truncate mb-2'> {tours.topic}</p>
                <p className='font-bold text-sm text-gray-600'>{tours.price} <span className='text-gray-400 text-sm font-light'>Private Transfer</span></p>
            </div>
        </div>
         ))}
        </>
    )
}

export default TourCategoriesResults