import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Landing = () => {

    useEffect(() => {
      const token = cookies.get("token")
      if (token) {
        window.location.href = "/homepage"
      }
    }, [])



  return (
    <div>
    
        <section className="h-screen w-full flex flex-col items-center">
            <div className="text-6xl text-center text-emerald-400 mt-52">
                <h1>Paise <span className="text-yellow-400"> شاٹ? </span></h1>
                <h1>Dehari Lagao!</h1>
            </div>
            <Link to="/homepage">
             <button className="bg-yellow-400 rounded-full px-4 py-2 text-brown-400 mt-10">Start Here</button>
            </Link>
        </section>
    </div>
  )
}

export default Landing
