import React, { useEffect, useState } from 'react'

const ShowAd = ({ title, description, amount, madeBy, trigger, setTrigger }) => {
    
    // const [popUp,setPopUp]=useState(true);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const interval = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.classList.toggle('overflow-hidden')
            clearTimeout(interval);
        }, 500)
    }, [trigger])

    return trigger ? (

        <div className="absolute z-30 w-full flex justify-center h-screen top-0 left-0 bg-black bg-opacity-50">
            <div className="bg-white shadow p-6 rounded-lg mt-32 w-[600px] mb-10">
                <button onClick={() => { setTrigger(false) }} className="text-green-600 font-bold text-xl ml-[550px] cursor-pointer">x</button>
                <h2 className="text-xl font-bold text-green-600 mb-2">{title}</h2>
                <h2 className="font-semibold text-green-600 mt-5">Description:</h2>
                <p className="text-gray-600 mb-2">{description}</p>
                <p className="text-gray-700 mb-2">Amount: ${amount}</p>
                {madeBy && (<p className="text-gray-700">Made By: {madeBy}</p>)}
            </div>
        </div>

    ) : ""
}

export default ShowAd










