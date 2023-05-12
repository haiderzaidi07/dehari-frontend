import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const UserBids = () => {
  const location = useLocation();
  const [placedBids, setPlacedBids] = useState([])
  const userid = location.pathname.split("/")[3];

  useEffect(() => {

    axios.get(`http://localhost:4500/profileSetup/placedbids/${userid}`, {
      withCredentials:true
    }).then(placedBids => {
      console.log(placedBids.data)
      setPlacedBids(placedBids.data.placedBids)
    })
  }, [userid])

  return ( 
    <>
    {
      placedBids.map(bid => (
    <div>

         {/* <!-- one of the bid from collection --> */}
         <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg" key={bid.id}>
               <div class="w-3/5">
    
                 <h1 class="font-bold text-green-600 text-lg">Lorem Ipsum</h1>
                 <h2 class="font-bold text-green-600 mt-5 ">Bid description:</h2>
                 <p class="mb-5">{bid.description}</p>
                 <span class="font-bold text-green-600">Bid amount: {bid.bid}</span>
                </div>
                <div class="w-1/5 mt-14">
                  <span class="font-bold text-green-600">Status:</span>
                  {/* <!-- add class bg-green-600 to the span tag you want to fill --> */}
                  <p><span class="border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Accepted</p>
                  <p><span class="bg-green-600 border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Rejected</p>
                  <p><span class="border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Interviewing</p>
                </div>
              </div>
              
      
    </div>
    ))}
    </>
  )
}

export default UserBids
