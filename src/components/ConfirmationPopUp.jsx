import React from 'react'

const ConfirmationPopUp = () => {
  return (
    <>
        <div id="confirmation_pop_up" class="hidden bg-white text-emerald-400 rounded-lg absolute p-6 top-14 w-1/3 left-1/2 -translate-x-1/2">
        <h1 class="text-xl text-center font-extrabold my-10">Please confirm your order!</h1>
        <button onclick="confirmBid()" class="hover:-translate-y-1 transition-transform active:translate-y-1 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-emerald-400 text-white">Yes, confirm</button>
        <button onclick="cancelBid()" class="hover:-translate-y-1 transition-transform active:translate-y-1 py-2 px-4 font-bold rounded-full block m-4 w-1/2 mx-auto bg-slate-200 text-slate-600">No, cancel it</button>
        </div>
    </>
  )
}

export default ConfirmationPopUp
