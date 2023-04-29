import React from 'react'

const Profile = () => {
  return (
    <div>
        <nav>
        <div class="flex justify-between items-center bg-white">
            <span class="text-green-600 mx-4 font-bold text-2xl">Dehari</span>
            <ul class="flex">
            <li class="mx-4 my-2">About</li>
            <li class="mx-4 my-2">Home</li>
            <li class="mx-4 my-2">Contact Us</li>

            <button
                class="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
            >
                Sign Out
            </button>
            </ul>
        </div>
        <hr class="w-full h-[2px] bg-green-600" />
        </nav>
    <img class="absolute top-0 h-80 -z-10 scale-x-150 w-full"  src="img/gradient.svg" alt="gradient"></img>
    <div class="mt-52 mb-20 bg-white rounded-xl shadow-lg p-10 w-2/3 mx-auto">

        <img class="mx-auto w-32 h-32 -mt-24" src="img/profilePicPlaceholder.jpeg" alt="profilePicPlaceholder">
        <span class="m-2 font-bold text-2xl text-green-600 text-center block">Haider Zaidi</span>
        <h1 class="text-center">ratings...(to be made)</h1>
        <button name="buying" onclick="switchProfile(this)" class="font-bold text-green-600 hover:text-green-700 block mx-auto">Switch to Selling</button>

        <div class="flex justify-left mt-10">
            <button name="profileInfo" onclick="displaySection(this)"  class="border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Profile</button>
            <button name="bidsSec" onclick="displaySection(this)"  class="sellerBtn hidden border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Bids</button>
            <button name="currOrdersSec" onclick="displaySection(this)"  class="sellerBtn hidden border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Current Orders</button>
            <button name="offersIGotSec" onclick="displaySection(this)"  class="buyerBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">Offers I got</button>
            <button name="myAdsSec" onclick="displaySection(this)"  class="buyerBtn border-2 border-green-600 text-green-600 font-semibold hover:text-white hover:bg-green-600 transition-colors  py-1 w-1/5 mx-2">My Ads</button>
        </div>
        <hr class="bg-green-600 w-full h-[3px] my-2">
        {/* <!-- about profile  --> */}
        <section class="mt-10 profileInfo">
            <h1 class="text-green-600 font-bold text-xl">About</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione rerum debitis distinctio expedita voluptates odit, aperiam et voluptatum perferendis, soluta aut molestias sequi mollitia? Nulla deleniti, repellat quo itaque in tempora corporis hic nesciunt voluptatem dolores ab dolore. Dolorem, qui neque vel a quaerat architecto ad numquam facilis voluptatum repellat!</p>
            <h1 class="text-green-600 font-bold text-xl">Skills</h1>
            <ul>
                <li>PhotoShop</li>
                <li>Illustrator</li>
                <li>SQL</li>
                <li>Database</li>
            </ul>
            <h1 class="text-green-600 font-bold text-xl">Certifications</h1>
            <ul>
                <li>PhotoShop - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolore.</li>
                <li>Illustrator - Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, sequi!</li>
                <li>SQL - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, optio!</li> 
            </ul>

            <a href="/editProfile.html" class="hover:-translate-y-1 active:translate-y-1 transition-transform rounded-full bg-green-600 text-white py-2 px-4 w-32 text-center mx-auto block mt-20">Edit Profile</a>
          </section>
          {/* <!-- seller bids section  --> */}
        <section class="hidden bidsSection">
          <!-- one of the bid from collection -->
          <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
           <div class="w-3/5">

             <h1 class="font-bold text-green-600 text-lg">Graphic designer</h1>
             <h2 class="font-bold text-green-600 mt-5 ">Bid description:</h2>
             <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam odit ad recusandae, molestiae quod beatae reiciendis quas. Nisi, iste.</p>
             <span class="font-bold text-green-600">Bid amount: 5$</span>
            </div>
            <div class="w-1/5 mt-14">
              <span class="font-bold text-green-600">Status:</span>
              {/* <!-- add class bg-green-600 to the span tag you want to fill --> */}
              <p><span class="border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Accepted</p>
              <p><span class="bg-green-600 border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Rejected</p>
              <p><span class="border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Interviewing</p>
            </div>
          </div>
          <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
           <div class="w-3/5">

             <h1 class="font-bold text-green-600 text-lg">Graphic designer</h1>
             <h2 class="font-bold text-green-600 mt-5 ">Bid description:</h2>
             <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam odit ad recusandae, molestiae quod beatae reiciendis quas. Nisi, iste.</p>
             <span class="font-bold text-green-600">Bid amount: 5$</span>
            </div>
            <div class="w-1/5 mt-14">
              <span class="font-bold text-green-600">Status:</span>
              <!-- add class bg-green-600 to the span tag you want to fill -->
              <p><span class="border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Accepted</p>
              <p><span class="bg-green-600 border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Rejected</p>
              <p><span class="border-[1px] border-green-600 rounded-full w-4 h-4 inline-block"> </span> Interviewing</p>
            </div>
          </div>
        
        </section>
        <!-- current orders section  -->
        <section class="hidden currentOrdersSection">
          <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
            <div class="w-3/5">
 
              <h1 class="font-bold text-green-600 text-lg">Graphic designer</h1>
              <h2 class="font-bold text-green-600 mt-5 ">Ad description:</h2>
              <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam odit ad recusandae, molestiae quod beatae reiciendis quas. Nisi, iste.</p>
              <span class="font-bold text-green-600">Price given: 5$</span>
             </div>
             <div class="w-1/5 mt-14">
               <span class="font-bold text-green-600">Status:</span>
               <!-- add class bg-green-600 to the span tag you want to fill -->
                <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors">Completed</button>
                <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Chat</button>
                <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Forfeit</button>

             </div>
           </div>
        </section>

        <!-- Offers i got section -->
        <section  class="hidden offersIGotSection">
          <div class="my-2 text-sm transition-transform hover:-translate-y-2 duration-500 flex justify-between border-2 border-green-600 p-4 bg-gray-50 shadow-lg">
            <div class="w-3/5">
 
              <h1 class="font-bold text-green-600 text-lg">Your Ad: Graphic designer</h1>
              <h2 class="font-bold text-green-600 mt-5 ">Ad description:</h2>
              <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam odit ad recusandae, molestiae quod beatae reiciendis quas. Nisi, iste.</p>
              <span class="font-bold text-green-600">Bid given: 5$</span>
             </div>
             <div class="w-1/5 mt-14">
               <span class="font-bold text-green-600">Status:</span>
               <!-- add class bg-green-600 to the span tag you want to fill -->
                <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors">Accept</button>
                <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Reject</button>
                <button class="border-2 border-green-600 my-1 rounded-full w-28 hover:text-white hover:bg-green-600 hover:opacity-100 transiton-colors" >Chat</button>

             </div>
           </div>
        </section>
        <!-- My ads section  -->
        <section class="hidden myAdsSection">
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
        </section>
    </div>

    <script src="script.js"></script>
  </body>
</html>
    </div>
  )
}

export default Profile
