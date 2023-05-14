import { useState } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [error, setError] = useState(null);

  const postRegister = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!username || !email || !password || !password2) {
      setError("Please fill in all the fields.");
      return;
    }

    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4500/users/register",
        {
          username,
          email,
          password,
          password2,
          securityQuestion,
          securityAnswer
        }
      );

      await cookies.set('token', response.data.token, { path: '/' })
      window.location.href = "/users/profileSetup";
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during registration.");
      }
      console.error(err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white w-1/2 p-8 my-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
          <form className="space-y-4">
            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-lg"
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-lg"
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-lg"
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label
                className="block font-semibold text-gray-700 mb-2"
                htmlFor="password2"
              >
                Confirm Password
              </label>
              <input
                className="w-full border border-gray-300 p-2 rounded-lg"
                type="password"
                id="password2"
                name="password2"
                onChange={(e) => setPassword2(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">Security Question</label>
              <select className="block w-full p-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-emerald-500" onChange={(e) => setSecurityQuestion(e.target.value)}>Security Question?
              <option value="" class="text-gray-700" selected>--select a security question</option>
              <option value="" class="text-gray-700"> What is your favorite color?</option>
              <option value="" class="text-gray-700"> What is the city where you were born?</option>
              <option value="" class="text-gray-700"> What is the name of your elementary school?</option>
              <option value="" class="text-gray-700"> What is your favorite book?</option>
              <option value="" class="text-gray-700"> What is your favorite movie?</option>
              </select>

              <input className="w-full border border-gray-300 p-2 mt-2 rounded-lg" 
                type="text" id="question-inp" name="question-inp" required value={securityAnswer} onChange={e => setSecurityAnswer(e.target.value)}
              ></input>
              
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div>
              <button
                className="hover:-translate-y-1 hover:text-emerald-500 w-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white py-2 rounded-lg hover:to-white hover:from-white hover:border-2 border-emerald-500 active:translate-y-1 transition-all duration-300 ease-in-out"
                onClick={postRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
