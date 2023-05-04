import React from 'react'

const CongratulationsPopUp = ({trigger,setTrigger,setPrevTrig}) => {
  return trigger? (
    <>
        <div id="congratulations_pop_up" class="bg-white text-emerald-400 rounded-lg absolute p-6 top-20 z-30 w-1/3 left-1/2 -translate-x-1/2">
            <img src="/img/img-congratulation.png" alt="" class="mx-auto w-2/3"></img>
            <h1 class="text-2xl text-center font-extrabold mt-10">Congratulations</h1>
            <h2 class="text-slate-800 font-semibold text-center ">Your bid has been sent successfully</h2>
            <button onClick={()=>{setTrigger(false);setPrevTrig(false)}} class="mt-10 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-emerald-400 text-white hover:-translate-y-1 transition-transform active:translate-y-1">Done</button>
        </div>

    </>
  ):""
}

export default CongratulationsPopUp
