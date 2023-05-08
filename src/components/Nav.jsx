import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("")
    
    const getUser = () => {
        setUsername(cookies.get("token").username)
    }
    


    const logout = () => {
        cookies.remove('token', { path: '/' });
        window.location.href = '/';
    }
    
    useEffect(() => {
        const token = cookies.get("token");
        if (token) {
            setIsLoggedIn(true)
            getUser()
        }
    }, [])

    useEffect(() => {
        console.log("Hello:", username);
    }, [username]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="flex justify-between items-center pr-5 pt-2">
        <Link to="/">
          <span className="text-green-600 mx-4 font-bold text-2xl">Dehari</span>
        </Link>
        <div className="flex">
          <ul className="flex">
            <Link to="/homepage">
              <li className="mx-4 my-2 transition-colors hover:text-emerald-500 text-gray-500">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="mx-4 my-2 transition-colors hover:text-emerald-500 text-gray-500">
                About
              </li>
            </Link>
            <Link to="/contactUs">
              <li className="mx-4 my-2 transition-colors hover:text-emerald-500 text-gray-500">
                Contact Us
              </li>
            </Link>
          </ul>

          <div className="flex justify-between mx-2 items-center">
            <div className="relative inline-block">
              <button
                onClick={toggleDropdown}
                className="text-black focus:outline-none"
              >
                <i class="hover:-translate-y-1 transition fa-solid fa-circle-user text-2xl text-emerald-500"></i>
              </button>
              {isOpen && (
                <ul className="absolute right-0 top-7 bg-white text-black py-2 mt-2 w-48 rounded shadow">
                  <Link to="/users/profile">
                    <li  onClick={toggleDropdown} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-color duration-300 hover:text-emerald-500">
                      Profile
                    </li>
                  </Link>
                  <Link to="/users/profileSetup">
                    <li  onClick={toggleDropdown} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-color duration-300 hover:text-emerald-500">
                      Profile Setup
                    </li>
                  </Link>
                  <Link to="/users/login">
                    <li  onClick={toggleDropdown} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-color duration-300 hover:text-emerald-500">
                      Log In
                    </li>
                  </Link>

                  <Link to="/users/register">
                    <li  onClick={toggleDropdown} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-color duration-300 hover:text-emerald-500">
                      Register
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-green-600" />
    </nav>
  );
};

export default Nav;
