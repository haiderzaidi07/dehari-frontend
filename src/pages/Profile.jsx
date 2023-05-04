import React,{useState} from 'react'
import UserProfileAbout from '../components/UserProfileAbout';
import UserBids from '../components/UserBids';
import UserOrders from '../components/UserOrders';
import OfferUserGot from '../components/OfferUserGot';
import UserAds from '../components/UserAds';
const Profile=()=>{

  const [profileBtn,setProfileBtn]=useState(true);
  const [bidsBtn,setBidsBtn]=useState(false);
  const [currOrdersBtn,setCurrOrdersBtn]=useState(false);
  const [offersBtn,setOffersBtn]=useState(false);
  const [myAdsBtn,setMyAdsBtn]=useState(false);

  const handleButton=(event)=>{
    // function that will hide all other section other than the one whose button is clicked ;

    switch (event.target.name) {
      case 'profileInfo':
        setProfileBtn(true);
        setBidsBtn(false);
        setCurrOrdersBtn(false);
        setOffersBtn(false);
        setMyAdsBtn(false);
        break;
      case 'bidsSec':
        setProfileBtn(false);
        setBidsBtn(true);
        setCurrOrdersBtn(false);
        setOffersBtn(false);
        setMyAdsBtn(false);
        break;
  
      case 'currOrdersSec':
        setProfileBtn(false);
        setBidsBtn(false);
        setCurrOrdersBtn(true);
        setOffersBtn(false);
        setMyAdsBtn(false);
        break;
      case 'offersIGotSec':
        setProfileBtn(false);
        setBidsBtn(false);
        setCurrOrdersBtn(false);
        setOffersBtn(true);
        setMyAdsBtn(false);
        break;
      case 'myAdsSec':
        setProfileBtn(false);
        setBidsBtn(false);
        setCurrOrdersBtn(false);
        setOffersBtn(false);
        setMyAdsBtn(true);
        break;
    
      default:
        break;
    }
  }

return (
    <>
      
        <img class="absolute top-0 h-80 -z-10 scale-x-150 w-full"  src="img/gradient.svg" alt="gradient"></img>
        <div class="mt-52 mb-20 bg-white rounded-xl shadow-lg p-10 w-2/3 mx-auto">
    
            <img class="mx-auto w-32 h-32 -mt-24" src="img/profilePicPlaceholder.jpeg" alt="profilePicPlaceholder"></img>
            <span class="m-2 font-bold text-2xl text-green-600 text-center block">Haider Zaidi</span>
            <h1 class="text-center">ratings...(to be made)</h1>
            <button name="buying" onclick="switchProfile(this)" class="font-bold text-green-600 hover:text-green-700 block mx-auto">Switch to Selling</button>
    
            <div class="flex justify-left mt-10">
              {/* put condition and hide/show buttons depending on the type of user from backend  */}
                <button name="profileInfo" onClick={handleButton}  class="border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Profile</button>
                <button name="bidsSec" onClick={handleButton}  class="sellerBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Bids</button>
                <button name="currOrdersSec" onClick={handleButton}  class="sellerBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Current Orders</button>
                <button name="offersIGotSec" onClick={handleButton}  class="buyerBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Offers I got</button>
                <button name="myAdsSec" onClick={handleButton}  class="buyerBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">My Ads</button>
            </div>
            <hr class="bg-green-600 w-full h-[3px] my-2"></hr>
            {/* <!-- about profile  --> */}
            <section class="mt-10 profileInfo">
            {profileBtn&& <UserProfileAbout/>}
              </section>
              {/* <!-- seller bids section  --> */}
            <section class=" bidsSection">
             
            {bidsBtn&& <UserBids/>}
            </section>
            {/* <!-- current orders section  --> */}
            <section class=" currentOrdersSection">
              {currOrdersBtn&&<UserOrders/>}
            </section>
    
            {/* <!-- Offers i got section --> */}
            <section  class="offersIGotSection">
             {offersBtn&&<OfferUserGot/>}
            </section>
            {/* <!-- My ads section  --> */}
            <section class=" myAdsSection">
              {myAdsBtn&& <UserAds/>}
            </section>
        </div>
        </>
        )
    
   
}

export default Profile;