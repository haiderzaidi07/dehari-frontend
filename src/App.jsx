import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import Login from './pages/login';
import Register from './pages/Register';
import Homepage from './pages/homepage';
import { useEffect } from 'react';
import axios from 'axios';
import ProfileSetup from './pages/ProfileSetup';
import AdList from './pages/AdList';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import PostAd from './pages/PostAd';
import EditProfile from './pages/EditProfile';



function App() {
  
  // const user = false
  const user=true

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
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/users/login' element={ user ? <Navigate to='/homepage' /> : <Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/homepage' element={ user ? <Homepage user={user} /> : <Navigate to='/users/login' />} />
        <Route path='/users/profileSetup' element={<ProfileSetup />} />
        <Route path='/ad/list' element={<AdList />} />
        <Route path='/ad/post' element={<PostAd/>} />
        <Route path='/users/profile' element={<Profile/>} />
        <Route path='/users/editProfile' element={<EditProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
