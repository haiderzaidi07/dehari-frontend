import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import PreLoader from './PreLoader'
import NotContentFound from './notContentFound'

const UserAds = () => {
  const location = useLocation()
  const [popUp,setPopUp]=useState(false);
  const [preloader, setPreloader] = useState(true);
  const [userAds, setUserAds] = useState([])
  const userid = location.pathname.split('/')[3]

  useEffect(() => {


    axios.get(`http://localhost:4500/profileSetup/getads/${userid}`, {
      withCredentials: true
    }).then(userAds => {

      setUserAds(userAds.data.userAds)
    })

  }, [userid])

  const deleteAd = (adId) => {

    axios.delete(`http://localhost:4500/ad/delete/${adId}`, {
      withCredentials: true
    }).then(res => {
      console.log(res)
      const filteredAds = userAds.filter(ad => ad.id !== adId)
      setUserAds(filteredAds);
    }).catch(error => {
      console.log(error)
    })
  }

  return preloader?(
  <div>
    <PreLoader time="2000" setTrigger={setPreloader}/>
  </div>
  ):(
    <>
      {userAds.length === 0 ? ( // Check if userAds is empty
        <NotContentFound /> // Render No Content Found component
      ) : (
        userAds.map(ad => (
          <div>
            <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
              <div className='w-full flex flex-col justify-between'>
                <div>

                <h1 class="font-bold text-green-600 text-lg">{ad.title}</h1>
                <h2 class="font-bold text-green-600 mt-5 ">Ad description:</h2>
                <p class="mb-5">{ad.description}</p>
                <div className='flex items-center justify-between'>
                  <span class="font-bold text-green-600">Price given: Rs. {ad.price}</span>
                  <button className="-ml-2  border-[2px] border-green-600 rounded-full py-1 px-2 text-green-600 hover:text-white hover:bg-green-600" onClick={() => deleteAd(ad.id)}><i class="fa-solid fa-trash cursor-pointer  text-green-600 "></i>  Delete Ad </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        )))}
    </>
  )
}

export default UserAds
