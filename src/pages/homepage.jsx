import React from 'react'

const homepage = ({user}) => {
  return (
    <div>
      <nav >
        <div className="flex justify-between items-center">

            <span className="text-green-600 mx-4 font-bold text-2xl ">Dehari</span>
            { user ? (
              <ul className="flex ">
                <li className="mx-4 my-2">Hello User</li>
                <li className="mx-4 my-2">About</li>
                <li className="mx-4 my-2">Contact Us</li>
                <a href="/users/signOut">
                    <button
                      className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
                      >
                      Sign Out
                    </button>
                </a>
                <a href="/profile">
                    <button
                      className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
                      >
                      Profile
                    </button>
                </a>
              </ul>
            ) : (
              <></>
            )}
                      {/* 
            <div className="flex hidden">
                <button className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1">Login In</button>
                <button className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1">Sign Up</button>
                <button className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1">Sign Out</button>
                <button className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"></button>
            </div>
            </div>
        */}
        </div>
        <hr className="w-full h-[2px] bg-green-600"></hr>
    </nav> 

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
