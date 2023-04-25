import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import Login from './pages/login';
import Register from './pages/Register';
import Homepage from './pages/homepage';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const user = false

  useEffect(() => {

    const getUser = () => {

      axios.get('http://localhost:4500/users/getUser', {
        withCredentials: true
      })

      // fetch("http://localhost:4500/users/getUser", {
      //   method: "GET",
      //   credentials: "include",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Credentials": true,
      //   },
      // })
      // .then((response) => {
      //   if (response.status === 200) return response.json();
      //   throw new Error("authentication has been failed!");
      // })
      .then((resObject) => {
        console.log(resObject)
        // setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    getUser()
  }, []);
  
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/users/login' element={ user ? <Navigate to='/homepage' /> : <Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/homepage' element={ user ? <Homepage user={user} /> : <Navigate to='/users/login' />} />
      </Routes>
    </div>
  );
}

export default App;
