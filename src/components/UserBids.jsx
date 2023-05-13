import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import PreLoader from './PreLoader'
  
  const UserBids = () => {
  const [preloader, setPreloader] = useState(true);
  const location = useLocation();
  const [placedBids, setPlacedBids] = useState([])
  const userid = location.pathname.split("/")[3];

  useEffect(() => {

    axios.get(`http://localhost:4500/profileSetup/placedbids/${userid}`, {
      withCredentials: true
    }).then(placedBids => {
      console.log(placedBids.data)
      setPlacedBids(placedBids.data.placedBids)
    })
  }, [userid])
  
  const deleteBid = (bidId) => {
    
    axios.delete(`http://localhost:4500/bid/deleteBid/${bidId}`, {
      withCredentials: true
    }).then(res => {
      console.log(res)
      const filteredBids = placedBids.filter(bid => bid.id !== bidId)
      setPlacedBids(filteredBids)
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
      {
        placedBids.map(bid => (
          <div>

            {/* <!-- one of the bid from collection --> */}
            <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg" key={bid.id}>
              <div class="w-3/5">

                <h1 class="font-bold text-green-600 text-lg">{bid.title}</h1>
                <h2 class="font-bold text-green-600 mt-5 ">Bid description:</h2>
                <p class="mb-5">{bid.description}</p>
                <span class="font-bold text-green-600">Bid amount: {bid.bid}</span>
              </div>
              <div class="w-1/5 relative ">
               
      
               
                <span class="block mt-8 font-bold text-green-600">Status:</span>
                {/* <!-- add class bg-green-600 to the span tag you want to fill --> */}
                <p><span className={`border-[1px] rounded-full border-green-600 w-4 h-4 inline-block ${bid.status ? 'bg-green-600' : ''}`}></span> Accepted</p>
                <p><span className={`border-[1px] rounded-full border-green-600 w-4 h-4 inline-block ${bid.status ? '' : 'bg-green-600'}`}></span> Pending</p>
                <button className='mt-5 -ml-2 border-[2px] border-green-600 rounded-full py-1 px-2 text-green-600 hover:text-white hover:bg-green-600' onClick={() => deleteBid(bid.id)}><i  class="fa-solid fa-trash cursor-pointer  text-green-600 "></i>  Delete Bid </button>
              </div>
            </div>


          </div>
        ))}
    </>
  )
}

export default UserBids
