import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <div className="flex justify-between items-center">
            <span className="text-green-600 mx-4 font-bold text-2xl">Dehari</span>
            <ul className="flex">
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

  )
}

export default Nav
