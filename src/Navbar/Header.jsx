import {useState, useEffect} from 'react';
import Cookies from 'universal-cookie'

import { Link } from 'react-router-dom'

const cookies = new Cookies()


const Header = () => {
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

    const unAuth = () => {
       return ( <><nav>
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
        </nav></>)
    }

    const auth = () => {

        return (<>
        <nav>
        <div className="flex justify-between items-center">
            <span className="text-green-600 mx-4 font-bold text-2xl">Dehari</span>
            <ul className="flex">
            <li className="mx-4 my-2">About</li>
            <li className="mx-4 my-2">Home</li>
            <li className="mx-4 my-2">Contact Us</li>
            </ul>
            <div className="flex">

            <Link to="/users/profile">
                <button
                    className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
                >
                    Hello {username}
                </button>
            </Link>
            
         
                <button
                    className="rounded-full bg-emerald-400 text-white mx-2 my-2 px-4 py-1"
                    onClick={logout}
                >
                    Logout
                </button>
        
            
            </div>
        </div>
        <hr className="w-full h-[2px] bg-green-600" />
        </nav></>
    
        )
    
    }

    return (
        <>
        {isLoggedIn ? auth() : unAuth()}
        </>
    )

    



}


export default Header;
