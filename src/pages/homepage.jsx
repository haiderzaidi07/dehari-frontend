import React from 'react'

const homepage = ({user}) => {
  return (
    <div>
      
    {/* <!-- cards --> */}
    <section className="flex flex-col items-center justify-center h-screen">
        {/* <!-- card  --> */}
        <div className="flex justify-center">

            <div className="m-4 h-[400px] bg-emerald-400 w-[400px] rounded-lg flex items-center flex-col justify-center">
                <a href="/ad/post" ><h1 className="text-white text-3xl font-bold mx-auto ">Post Ads</h1></a>
            </div>

            {/* <!-- card  --> */}
            <div className="m-4 h-[400px] bg-emerald-400 w-[400px] rounded-lg flex items-center flex-col justify-center">
                <a href="/ad/list" ><h1 className="text-white text-3xl font-bold mx-auto ">View Ads</h1></a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default homepage
