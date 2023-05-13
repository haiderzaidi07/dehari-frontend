import { useState } from 'react'
import axios from 'axios'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [answer, setAnswer] = useState("")
  const [email, setEmail] = useState("")
  
  const forgotPassword = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`http://localhost:4500/users/forgot-password`, {
        email, 
        answer
      })
    } catch (err) {
      console.error(err)
    } 
  }

  const postLogin = async (e) => {
    e.preventDefault()

    // Validate input fields
    if (!username || !password) {
      setError("Please fill in all the fields.")
      return;
    }

    try {
      const response = await axios.post('http://localhost:4500/users/login', {
        username,
        password,
      })

      cookies.set('token', response.data.token, { path: '/' })
      window.location.href = '/homepage';
    } catch (err) {
      console.error(err)
      setError("Login failed. Please check your username and password.")
      setUsername("")
      setPassword("")
    }
  }

  function handleForgotPassword(e){
    const inps=document.querySelectorAll('.forgot-inp-hide')

    inps.forEach(inp=>{
      inp.classList.toggle('hidden')

    })
    if(e.target.innerText === "I remember it"){
      e.target.innerText = "Forgot Password?"
    }
    else
    e.target.innerText="I remember it"

  }

  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <form className="space-y-4">
            <div className="forgot-inp-hide">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="username">Username</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required
              ></input>
            </div>
            <div className="forgot-inp-hide">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Password</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required 
              ></input>
            </div>
            <div className="forgot-inp-hide hidden">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Email</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required
              ></input>
            </div>
            <div className="forgot-inp-hide hidden">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Security Question</label>
              <select className="block w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-emerald-500">Security Question?
              <option value="" class="text-gray-700" selected>--select a security question</option>
              <option value="" class="text-gray-700"> What is your favorite color?</option>
              <option value="" class="text-gray-700"> What is the city where you were born?</option>
              <option value="" class="text-gray-700"> What is the name of your elementary school?</option>
              <option value="" class="text-gray-700"> What is your favorite book?</option>
              <option value="" class="text-gray-700"> What is your favorite movie?</option>
              </select>

              <input className="w-full border border-gray-300 p-2 mt-2 rounded-lg" 
                type="text" id="question-inp" name="question-inp" value={answer} onChange={e => setAnswer(e.target.value)} required
              ></input>
            </div>

            <div className="forgot-inp-hide hidden">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="new-password">new-password</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="new-password" id="new-password" 
              ></input>
            </div>
            <div className="forgot-inp-hide hidden">
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="confirm-new-password">confirm-new-password</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="confirm-new-password" id="confirm-new-password" 
              ></input>
            </div>
            <button onClick={(e)=>{handleForgotPassword(e)}} className="font-semibold text-slate-400 hover:text-slate-600">Forgot Password?</button>
            {error && <div className="text-red-500">{error}</div>}
            <div>
              <button className="hover:-translate-y-1 hover:text-emerald-500 w-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-2 rounded-lg hover:to-white hover:from-white hover:border-2 border-emerald-500 active:translate-y-1 transition-all duration-300 ease-in-out" onClick={postLogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
