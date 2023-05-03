import React from 'react'

const FullAdPopUp = ({trigger, setTrigger}) => {
  return trigger ? (
    
    // <div id="ad_pop_up" class="hidden transition-transform duration-500 bg-white text-emerald-400 rounded-lg absolute p-6 top-14 w-1/2 left-1/2 -translate-x-1/2">
    //     <span onClick={() => {setTrigger(false)}} class="hover:scale-110 active:scale-90 cursor-pointer text-emerald-400 font-extrabold text-2xl absolute top-6 right-10">x</span>
    //     <h1 class=" font-bold text-2xl my-2">Graphic Designer</h1>
    //     <p class="text-slate-600 w-5/6 py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde saepe nobis, quod omnis dolorum quas maxime tempore. Exercitationem unde ipsa odio soluta asperiores illum, repudiandae debitis quisquam tenetur corrupti vel est quas doloribus! Enim at quod tempore temporibus eligendi libero maiores totam, molestias illo quam perferendis delectus eveniet vitae recusandae nostrum sint illum nisi repudiandae ad nam dolore minus quasi.</p>

    //     <h3 class="font-semibold mt-10">Sample images</h3>
    //     <div class="flex">
    //         <img class="w-1/5 m-1 hover:scale-150 transition-all" src="img/img1.jpg" alt=""></img>
    //         <img class="w-1/5 m-1 hover:scale-150 transition-all" src="img/img2.jpg" alt=""></img>
    //         <img class="w-1/5 m-1 hover:scale-150 transition-all" src="img/img3.jpg" alt=""></img>
    //     </div>
    //     <button onclick="makeBid()" class="mx-auto block bg-emerald-400 rounded-full py-2 px-4 text-white mt-10 hover:-translate-y-1 transition-transform active:translate-y-1">Make bid</button>
    // </div>
    <div>
        <h1>My Popup</h1>
        <button onClick={() => {setTrigger(false)}}>Close</button>
    </div>
  ) : ""
}

export default FullAdPopUp
