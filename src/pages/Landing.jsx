import React from 'react'
import { Link } from 'react-router-dom'

const landing = () => {
  return (
    <div>
        <nav>
        <div className="flex justify-between items-center">
            <span className="text-green-600 mx-4 font-bold text-2xl">Dehari</span>
            <ul className="flex hidden">
            <li className="mx-4 my-2">About</li>
            <li className="mx-4 my-2">Home</li>
            <li className="mx-4 my-2">Contact Us</li>
            </ul>
            <div className="flex">

            <Link to="/users/login">
                <button
                    className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
                >
                    Log In
                </button>
            </Link>
            
            <Link to="/users/register">
                <button
                    className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
                >
                    Register
                </button>
            </Link>
            
            </div>
        </div>
        <hr className="w-full h-[2px] bg-green-600" />
        </nav>

        <section className="h-screen w-full flex flex-col items-center">
            <div className="text-6xl text-center text-emerald-400 mt-52">
                <h1>Paise <span className="text-yellow-400"> شات? </span></h1>
                <h1>Dehari Lagao!</h1>
            </div>
            <button className="bg-yellow-400 rounded-full px-4 py-2 text-brown-400 mt-10">Start Here</button>
        </section>
    </div>
  )
}

export default landing
