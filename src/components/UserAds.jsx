import React from 'react'

const UserAds = () => {
  return (
    <div>
      <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
                <div class="w-3/5">
     
                  <h1 class="font-bold text-green-600 text-lg">Graphic designer</h1>
                  <h2 class="font-bold text-green-600 mt-5 ">Ad description:</h2>
                  <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam odit ad recusandae, molestiae quod beatae reiciendis quas. Nisi, iste.</p>
                  <span class="font-bold text-green-600">Price given: 5$</span>
                 </div>
                 <div class="w-1/5 mt-14">
                   <span class="font-bold text-green-600">Assigned to:</span>
                  <a href="/">User profile name(link)</a>
    
                 </div>
               </div>
    </div>
  )
}

export default UserAds