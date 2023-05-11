import React from 'react'

const UserOrders = ({currentOrders}) => {
  return (
    <>
    {
      currentOrders.map(order=> (
    <div>
      <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
                <div class="w-3/5">
     
                <h1 class="font-bold text-green-600 text-lg">{order.adtitle}</h1>
                  <h2 class="font-bold text-green-600 mt-5 ">Ad description:</h2>
                  <p class="mb-5">{order.ad_description}</p>
                  <h2 class="font-bold text-green-600 mt-5 ">Bid description:</h2>
                  <p class="mb-5">{order.bid_description}</p>
                  <span class="font-bold text-green-600">Price given: Rs. {order.bid}</span>
                 </div>
                 <div class="w-1/5 mt-14">
                   <span class="font-bold text-green-600">Status:</span>
                   {/* <!-- add class bg-green-600 to the span tag you want to fill --> */}
                    <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors">Completed</button>
                    <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Chat</button>
                    <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Forfeit</button>
    
                 </div>
               </div>
    </div>
    ))}
    </>
  )
}

export default UserOrders
