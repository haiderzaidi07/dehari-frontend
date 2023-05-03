import React from 'react'

const BiddingPopUp = () => {
  return (
    <>
        <div class="hidden bg-white text-emerald-400 rounded-lg absolute p-6 top-14 w-1/2 left-1/2 -translate-x-1/2">
            <span onclick="closePopUp()"  class="hover:scale-110 active:scale-90 cursor-pointer text-emerald-400 font-extrabold text-2xl absolute top-6 right-10">x</span>
            
            <form action="">

                <h2 class="font-bold text-xl">Bid description:</h2>
                <textarea class="p-2 my-4 w-full bg-slate-100 text-slate-600 text-md" name="" id="" cols="30" rows="10"></textarea>
                <h2 class="font-bold">Attach any relevant work</h2>
                <input type="file" name="" id="" class="block file:bg-white file:rounded-xl file:px-2 file:py-1 file:text-emerald-400 mb-10 mt-2 file:text-sm file:border-[2px] file:border-emerald-400"></input>
                <span>Your bid</span>
                <input type="text" class="font-semibold border-2 border-emerald-400 block py-2 px-4 my-2 text-sm rounded-sm" placeholder="Input your price"></input>
                <input onclick="placeBid()" type="button" value="Bid" class="hover:-translate-y-1 transition-transform active:translate-y-1 block mx-auto bg-emerald-400 text-white py-2 px-4 rounded-full w-32 mt-10"></input>
            </form>
        </div>
    </>
  )
}

export default BiddingPopUp
