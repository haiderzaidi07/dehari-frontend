import React, { useState, useEffect } from 'react'
import FullAdPopUp from '../components/FullAdPopUp'
import Ads from '../components/Ads'
import axios from 'axios'
import PreLoader from '../components/PreLoader'

const AdList = (e) => {
  const [preloader, setPreLoader] = useState(true);
  const [ads, setAds] = useState([]);
  const [ad, setAd] = useState({});
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredAds, setFilteredAds] = useState(ads);


  useEffect(() => {
    axios.get('http://localhost:4500/ad/list', {
      withCredentials: true,
    })
      .then(rows => { // add this line to log the data to console
        setAds(rows.data)
        console.log(ads)
      })
      .catch(error => {
        console.log(error)
        console.log("error occured")
      });
  }, []);

  const [fullAdPopUpBtn, setFullAdPopUpBtn] = useState(false)
  const handleFullAdPopUp = (value, value2) => {
    setFullAdPopUpBtn(value, value2);
    setAd(value2);
  }
  // const handleSearch = (query) => {
  //   const filteredList = ads.filter((ad) => {
  //     // Filter based on your desired conditions
  //     // For example, searching by ad title or description
  //     return ad.title.toLowerCase().includes(query.toLowerCase()) ||
  //       ad.description.toLowerCase().includes(query.toLowerCase());
  //   });

  //   setFilteredAds(filteredList);
  // };



  return (
    <>
      {/* <!-- Ad list --> */}
      <div class="bg-gradient-to-b pt-32 from-emerald-500 to-indigo-300 h-full">
        <div class="w-2/3 mx-auto bg-white rounded-t-xl pb-10">
          <div class="border-[1px] border-slate-300 p-6 rounded-t-xl">
            <h1 class="text-3xl my-4 font-bold text-emerald-400">
              Jobs of your domain
            </h1>
            <form action="">
              <input
                class="border-[1px] border-emerald-400 rounded-l-full py-2 px-4 my-4 w-5/6"
                type="text"
                placeholder="Type something..."
              // value={searchQuery}
              // onChange={(e) => handleSearch(e.target.value)}
              />
              <input
                type="button"
                value="Search"
                class="border-[1px] border-emerald-400 bg-emerald-400 text-white rounded-r-full py-2 px-4 my-4 -ml-2"
              />
            </form>

          </div>
          {
            preloader ? (

              <div className="p-10">
                <PreLoader time="2000" setTrigger={setPreLoader} />
              </div>
            ) :
            (
              <div>
                    {/* <!-- Ad  --> */ }
                    {
                      <Ads handleFullAdPopUp={handleFullAdPopUp} ads={ads} />
                    }
                  </div>
                )
          }
        </div>
        <FullAdPopUp trigger={fullAdPopUpBtn} ad={ad} setTrigger={setFullAdPopUpBtn} />
      </div>







    </>
  )
}

export default AdList
