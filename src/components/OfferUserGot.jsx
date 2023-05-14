import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import PreLoader from './PreLoader'
import NotContentFound from './notContentFound'
import ShowAd from './ShowAd'

const OfferUserGot = () => {
  const [popUp,setPopUp]=useState(false);
  const [preloader, setPreloader] = useState(true);
  const location = useLocation()
  const [offersIGot, setOffersIGot] = useState([])
  const userid = location.pathname.split('/')[3]
  useEffect(() => {


    axios.get(`http://localhost:4500/profileSetup/offersigot/${userid}`, {
      withCredentials: true
    }).then(offersIGot => {
      console.log(offersIGot.data.offersIGot)
      setOffersIGot(offersIGot.data.offersIGot)
    })

  }, [userid])

  const acceptButtonClick = (bidid, adid) => {
    // Make the POST request to your backend
    axios.post('http://localhost:4500/bid/acceptbid', {
      bidid: bidid,
      adid: adid
    }, {
      withCredentials: true
    })
      .then(response => {
        // Handle the response if needed
        console.log(response)
      })
      .catch(error => {
        // Handle the error if the request fails
        console.error(error);
      });
  };

  const rejectButtonClick = (bidid, adid) => {
    // Make the POST request to your backend
    axios.post('http://localhost:4500/bid/rejectbid', {
      bidid: bidid,
      adid: adid
    })
      .then(response => {
        // Handle the response if needed
        console.log(response);
      })
      .catch(error => {
        // Handle the error if the request fails
        console.error(error);
      });
  };

  return preloader ? (
    <div>
      <PreLoader time="2000" setTrigger={setPreloader} />
    </div>
  ) : (
    <>
      {offersIGot.length === 0 ? (
        <NotContentFound/>
      ) : (
        offersIGot.map(offer => (
          <>
             <ShowAd title={offer.adtitle} description={offer.ad_description} amount={offer.bid} madeBy={""} trigger={popUp} setTrigger={setPopUp} />
          <div>


            <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
              <div class="w-3/5">

                <h1 class="font-bold text-green-600 text-lg">Your Ad: {offer.adtitle}</h1>
                <h2 class="font-bold text-green-600 mt-5 ">Ad description: </h2>
                <p class="mb-5">{offer.ad_description}</p>
                <h2 class="font-bold text-green-600 mt-5 ">Bid description: </h2>
                <p class="mb-5">{offer.bid_description}</p>
                <span class="font-bold text-green-600">Bid given: Rs. {offer.bid}</span>
              </div>
              <div class="w-1/5 mt-14">
                <span class="font-bold text-green-600">Status:</span>
                {/* <!-- add class bg-green-600 to the span tag you want to fill --> */}
                <button className="border-2 text-green-600 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" onClick={() => acceptButtonClick(offer.bidid, offer.adid)}>Accept</button>
                <button className="border-2 text-green-600 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" onClick={() => rejectButtonClick(offer.bidid, offer.adid)}>Reject</button>
                {/* <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Chat</button> */}
                <button onClick={()=>{setPopUp(true)}} className=" hover:bg-green-600 hover:text-white bg-white rounded-full border-2 border-green-600 text-green-600 w-28 my-1">Show Ad</button>


              </div>
            </div>

          </div>
          </>
        )))}
    </>
  )
}

export default OfferUserGot
