import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

  const postRegister = () => {
    axios.post('http://localhost:4500/users/register', {
      username,
      email,
      password,
      password2
    })
    .then((result) => {
        window.location.href = "/login";
      })
    .catch((e) => (e = new Error()))
  }

  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
        <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
            <form className="space-y-4">
            <div>
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="username">Username</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg" 
                    type="text" id="username" name="username" onChange={e => setUsername(e.target.value)} required
                ></input>
                
            </div>
            <div>
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">Email</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg" 
                    type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} required
                ></input>
                
            </div>
            <div>
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Password</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg" 
                    type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} required
                ></input>
                
            </div>
            <div>
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password2">Confirm Password</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg" 
                    type="password" id="password2" name="password2" onChange={e => setPassword2(e.target.value)} required
                ></input>
                
            </div>
            {/* <!--Add EJS error code--> */}
                <div>
                <button className="w-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out" onClick={postRegister}>Register</button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Register
