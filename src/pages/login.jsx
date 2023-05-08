import { useState } from 'react'
import axios from 'axios'



const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const postLogin = async (e) => {
    e.preventDefault()
    
   await axios.post('http://localhost:4500/users/login', {
      username,
      password,
    })
    .then(res => {
      
      cookies.set('token', res.data.token, { path: '/' })
      window.location.href = '/homepage';
    })
    .catch(err => {
      console.error(err)
      alert("Login failed")
      setUsername("")
      setPassword("")

    })
      
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
              type="text" id="username" name="username" onChange={e => setUsername(e.target.value)} required
            ></input>
            </div>
            <div>
            <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Password</label>
            <input className="w-full border border-gray-300 p-2 rounded-lg" 
              type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} required 
            ></input>
            </div>
            <div>
            <button className="w-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out" onClick={postLogin}>Login</button>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Login