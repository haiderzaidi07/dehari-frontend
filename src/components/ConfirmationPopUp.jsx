import React,{useState} from 'react'
import CongratulationsPopUp from './CongratulationsPopUp'

const ConfirmationPopUp = ({trigger,setTrigger,setPrevTrig}) => {
  const [congratulationsPopUpBtn, setCongratulationsPopUpBtn] = useState(false)
  const [hidePrev, setHidePrev] = useState(true)



  return trigger&& hidePrev? (
    <>
  <div className='bg-black absolute top-0 bg-opacity-50 z-20 w-full h-[800px]'>
      </div>
        <div id="confirmation_pop_up" class="bg-white text-emerald-400 rounded-lg absolute z-20 p-6 top-20 w-1/3 left-1/2 -translate-x-1/2">
        <h1 class="text-xl text-center font-extrabold my-10">Please confirm your order!</h1>
        <button onClick={()=>{setCongratulationsPopUpBtn(true)}} class="hover:-translate-y-1 transition-transform active:translate-y-1 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-emerald-400 text-white">Yes, confirm</button>
        <button onClick={()=>{setTrigger(false)}} class="hover:-translate-y-1 transition-transform active:translate-y-1 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-slate-200 text-slate-600">No, cancel it</button>
        </div>
        <CongratulationsPopUp trigger={congratulationsPopUpBtn} setTrigger={setCongratulationsPopUpBtn} setPrevTrig={setHidePrev} />
    </>
  ):""
}

export default ConfirmationPopUp
