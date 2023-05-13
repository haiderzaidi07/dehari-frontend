import React from 'react'

const notContentFound = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full'>
                <img className='w-1/5' src="https://cdn.pixabay.com/photo/2023/04/11/20/04/panda-7918137_1280.jpg" alt="no items found Image" />
                <h1 className='mt-10 text-xl animate-bounce text-gray-800 font-bold'>Oops! No content found!</h1>
            </div>
        </>
    )
}

export default notContentFound
