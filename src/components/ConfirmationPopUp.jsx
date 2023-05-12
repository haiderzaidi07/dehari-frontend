import React,{useState,useEffect} from 'react'
import CongratulationsPopUp from './CongratulationsPopUp'
import axios from "axios"
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ConfirmationPopUp = ({trigger,setTrigger,prevTrigger, ad, bid, description, fullname, skills, certification}) => {
  const [congratulationsPopUpBtn, setCongratulationsPopUpBtn] = useState(false)
  const [hidePrev, setHidePrev] = useState(true)
  
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const interval=setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.classList.toggle('overflow-hidden')
      clearTimeout(interval);
    },500)
  },[trigger,hidePrev])


  const makeEdit = () => {
    const userid = cookies.get('token').id
    axios.put(`http://localhost:4500/profileSetup/editprofile`, {
      userid: userid,
      fullname: fullname,
      skills: skills,
      certification: certification
  }, {
    withCredentials: true
  }).then(res => console.log(res)).catch(error => console.log(error)) 
  }

  const makebid = (ad_id, bid, description) => {
    const user_id = cookies.get("token").id;
    console.log(ad_id, parseInt(bid, 10), description, user_id)
    axios.post('http://localhost:4500/bid/makebid', {
      ad_id: ad_id,
      bid: bid,
      description: description,
      userid: user_id
    }, {
      withCredentials: true
    })
      .then(res => { // add this line to log the data to console
        console.log(res);
        setCongratulationsPopUpBtn(true)
      })
      .catch(error => {
        console.log(error)
        throw (error);
      });
  }

  const performAction = () => {
    if (prevTrigger === true) {
      console.log("make edit called")
      makeEdit(fullname, skills, certification)
      setCongratulationsPopUpBtn(true)
    } else {
      console.log("make bid called")
      makebid(ad.id, bid, description)
      setCongratulationsPopUpBtn(true)
    }

  }

  return trigger&& hidePrev? (
    <>
  <div className='bg-black absolute top-0 bg-opacity-50 z-20 w-full h-[800px]'>
      </div>
        <div id="confirmation_pop_up" class="bg-white text-emerald-400 rounded-lg absolute z-20 p-6 top-20 w-1/3 left-1/2 -translate-x-1/2">
        <h1 class="text-xl text-center font-extrabold my-10">Please confirm your order!</h1>
        <button onClick={()=>performAction()} class="hover:-translate-y-1 transition-transform active:translate-y-1 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-emerald-400 text-white">Yes, confirm</button>
        <button onClick={()=>{setTrigger(false)}} class="hover:-translate-y-1 transition-transform active:translate-y-1 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-slate-200 text-slate-600">No, cancel it</button>
        </div>
        <CongratulationsPopUp trigger={congratulationsPopUpBtn} setTrigger={setCongratulationsPopUpBtn} setPrevTrig={setHidePrev} />
    </>
  ):""
}

export default ConfirmationPopUp
