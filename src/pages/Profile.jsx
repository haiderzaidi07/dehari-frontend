import React,{useState, useEffect} from 'react'
import UserProfileAbout from '../components/UserProfileAbout';
import UserBids from '../components/UserBids';
import UserOrders from '../components/UserOrders';
import OfferUserGot from '../components/OfferUserGot';
import UserAds from '../components/UserAds';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Profile=()=>{
  const location = useLocation()
  // console.log(location)
  const userid = location.pathname.split("/")[3];
  // console.log(userid)
  const [userProfile, setUserProfile] = useState({
    fullname : "",  
    skills : [],
    certification : [], 
  });
  
  // const [userAds, setUserAds] = useState([])
  // const [offersIGot, setOffersIGot] = useState([])
  // const [currentOrders, setCurrentOrders] = useState([])

  function handleProfileSwitch(event){
    // alert( event.target.innerText);
    if(event.target.innerText==="Switch to Selling")
    event.target.innerText="Switch to Buying"
    else
    event.target.innerText="Switch to Selling"

    const options=document.querySelectorAll('.switch-opt');
    
    options.forEach(option=>{
      option.classList.toggle('hidden')
    })
  }

  useEffect(() => {
      
        axios.get(`http://localhost:4500/profileSetup/profile/${userid}`, {
          withCredentials:true  
        }).then(userProfile =>{
        setUserProfile(userProfile.data.userProfile)
        // setPlacedBids(userProfile.data.placedBids.rows)
        // setUserAds(userProfile.data.userAds.rows)
        // setOffersIGot(userProfile.data.offersIGot.rows)
        // setCurrentOrders(userProfile.data.currentOrders.rows)
      }).catch(error => {
        console.log(error)
        console.log("error occured")
      })
  }, [userid]);
// console.log(offersIGot)
  const [profileBtn,setProfileBtn]=useState(true);
  const [bidsBtn,setBidsBtn]=useState(false);
  const [currOrdersBtn,setCurrOrdersBtn]=useState(false);
  const [offersBtn,setOffersBtn]=useState(false);
  const [myAdsBtn,setMyAdsBtn]=useState(false);

  const handleButton=(event)=>{
    // function that will hide all other section other than the one whose button is clicked ;
   const tabsBtnArr=document.querySelectorAll(".tabsBtn")
   const btnSetStates=[
    setProfileBtn,
    setBidsBtn,
    setCurrOrdersBtn,
    setOffersBtn,
    setMyAdsBtn,
   ]
   function handleOtherStates(_state,_btn){
    btnSetStates.forEach(state=>{
      if(state===_state)
      state(true);
      else
      state(false);
    })

    tabsBtnArr.forEach(btn=>{
      if(btn===_btn)
      {btn.classList.remove('bg-white','text-green-600')
        btn.classList.add('bg-green-600','text-white')
        }
        else{
          if(btn.classList.contains('bg-green-600'))
          {
            btn.classList.remove('bg-green-600','text-white')
            btn.classList.add('bg-white','text-green-600')
          }
        }
      
    })
   }
    
    switch (event.target.name) {
      case 'profileInfo':
       handleOtherStates(setProfileBtn,event.target)
        break;
      case 'bidsSec':
        handleOtherStates(setBidsBtn,event.target);
        break;
      case 'currOrdersSec':
        handleOtherStates(setCurrOrdersBtn,event.target)
        break;
      case 'offersIGotSec':
        handleOtherStates(setOffersBtn,event.target)
        break;
      case 'myAdsSec':
        handleOtherStates(setMyAdsBtn,event.target)
        break;
    
      default:
        break;
    }
  }

return (
    <>
        <img class="absolute top-0 h-80 -z-10 scale-x-150 w-full"  src="https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_1280.png" alt="gradient"></img>
        <div class="mt-52 mb-20 bg-white rounded-xl shadow-lg p-10 w-2/3 mx-auto">
    
            <img class="mx-auto w-32 h-32 -mt-24" src="https://cdn.pixabay.com/photo/2020/10/23/17/52/fox-5679446_1280.png" alt="profilePicPlaceholder"></img>
            <span class="m-2 font-bold text-2xl text-green-600 text-center block">{userProfile.fullname}</span>
            <button onClick={(e)=>{handleProfileSwitch(e)}} name="buying" class="font-bold text-green-600 hover:text-green-700 block mx-auto">Switch to Selling</button>
    
            <div class="flex justify-left mt-10">
              {/* put condition and hide/show buttons depending on the type of user from backend  */}
                <button name="profileInfo"   id="btn-profileInfo"   onClick={handleButton}  class="tabsBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Profile</button>
                <button name="bidsSec"       id="btn-bidsSec"       onClick={handleButton}  class="tabsBtn switch-opt hidden border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Bids</button>
                <button name="currOrdersSec" id="btn-currOrdersSec" onClick={handleButton}  class="tabsBtn switch-opt hidden border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Current Orders</button>
                <button name="offersIGotSec" id="btn-offersIGotSec" onClick={handleButton}  class="tabsBtn switch-opt border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Offers I Got</button>
                <button name="myAdsSec"      id="btn-myAdsSec"      onClick={handleButton}  class="tabsBtn switch-opt border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">My Ads</button>
            </div>
            <hr class="bg-green-600 w-full h-[3px] my-2"></hr>
            {/* <!-- about profile  --> */}
            <section class="mt-10 profileInfo">
            {profileBtn&& <UserProfileAbout userProfile={userProfile}/>}
              </section>
              {/* <!-- seller bids section  --> */}
            <section class="bidsSection">
             
            {bidsBtn&& <UserBids/>}
            </section>
            {/* <!-- current orders section  --> */}
            <section class="currentOrdersSection">
              {currOrdersBtn&&<UserOrders />}
            </section>
    
            {/* <!-- Offers i got section --> */}
            <section  class="offersIGotSection">
             {offersBtn&&<OfferUserGot/>}
             {/* {offersBtn&&<OfferUserGot/>} */}

            </section>
            {/* <!-- My ads section  --> */}
            <section class="myAdsSection">
              {myAdsBtn&& <UserAds />}
            </section>
        </div>
        </>
        )
    
   
}

export default Profile;
