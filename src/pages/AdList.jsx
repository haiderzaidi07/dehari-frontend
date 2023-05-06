import React, { useState } from 'react'
import FullAdPopUp from '../components/FullAdPopUp'

const AdList = () => {
  
    const [fullAdPopUpBtn, setFullAdPopUpBtn] = useState(false)

  

    return (
    <div>
      
    {/* <div id="black_shade" class="absolute bg-black h-[2000px] w-full top-0 opacity-70"></div> */}
    {/* <!-- Ad list --> */}
    <section class="bg-red-500">
      <div class="mt-32 h-screen w-2/3 mx-auto bg-white">
        <div class="border-[1px] border-slate-300 p-6 rounded-t-xl">
          <h1 class="text-3xl my-4 font-bold text-emerald-400">
            Jobs of your domain
          </h1>
          <form action="">
            <input
              class="border-[1px] border-emerald-400 rounded-l-full py-2 px-4 my-4 w-5/6"
              type="text"
              placeholder="Type something..."
            />
            <input
              type="button"
              value="Search"
              class="border-[1px] border-emerald-400 bg-emerald-400 text-white rounded-r-full py-2 px-4 my-4 -ml-2"
            />
          </form>
        </div>

        {/* <!-- Ad  --> */}
        <div onClick={ () => {setFullAdPopUpBtn(true)}} id="ad" class="ad bg-white border-[1px] border-slate-300 text-emerald-400 p-6 active:translate-y-2 hover:scale-105 transition-all duration-500" >
          <h2 class="text-xl font-semibold my-2">Graphic Designer</h2>
          <p class="text-slate-600 w-2/3 mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            deleniti accusamus fugiat explicabo molestiae laborum, eaque
            excepturi quos adipisci, officiis quaerat, minus laboriosam ipsam
            quidem sequi recusandae! Quos, explicabo eum!
          </p>
          <span class="font-semibold my-10">Price estimate: 25$</span>

         
        </div>
      </div>
    </section>

    

    <FullAdPopUp trigger={fullAdPopUpBtn} setTrigger={setFullAdPopUpBtn} />
        



    </div>
  )
}

export default AdList
