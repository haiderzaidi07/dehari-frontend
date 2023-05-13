import { useState } from 'react'
import axios from 'axios'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const postLogin = async (e) => {
    e.preventDefault()

    // Validate input fields
    if (!username || !password) {
      setError("Please fill in all the fields.")
      return;
    }

    try {
      const response = await axios.post('https://dehari.cyclic.app/users/login', {
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

  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="username">Username</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} required
              ></input>
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Password</label>
              <input className="w-full border border-gray-300 p-2 rounded-lg" 
                type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required 
              ></input>
            </div>
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
