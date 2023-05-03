import React, { useState } from 'react'
import FullAdPopUp from '../components/FullAdPopUp'

const AdList = () => {
  
    const [buttonPopUp, setButtonPopUp] = useState(false)
  
    return (
    <div>
      
    <nav>
      <div class="flex justify-between items-center">
        <span class="text-green-600 mx-4 font-bold text-2xl">Dehari</span>
        <ul class="flex">
          <li class="mx-4 my-2">About</li>
          <li class="mx-4 my-2">Home</li>
          <li class="mx-4 my-2">Contact Us</li>
        </ul>
        <div class="flex hidden">
          <button
            class="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
          >
            Login In
          </button>
          <button
            class="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
          >
            Sign Up
          </button>
        </div>
      </div>
      <hr class="w-full h-[2px] bg-green-600" />
    </nav>
    
    <div id="black_shade" class="hidden absolute bg-black h-[1000px] w-full top-0 opacity-70"></div>
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
        <div id="ad" class="ad border-[1px] border-slate-300 text-emerald-400 p-6" >
          <h2 class="text-xl font-semibold my-2">Graphic Designer</h2>
          <p class="text-slate-600 w-2/3 mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            deleniti accusamus fugiat explicabo molestiae laborum, eaque
            excepturi quos adipisci, officiis quaerat, minus laboriosam ipsam
            quidem sequi recusandae! Quos, explicabo eum!
          </p>
          <span class="font-semibold my-10">Price estimate: 25$</span>
          <button onClick={ () => {setButtonPopUp(true)}}>Open Full</button>
        </div>
      </div>
    </section>

    

    <FullAdPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />
        



    </div>
  )
}

export default AdList
