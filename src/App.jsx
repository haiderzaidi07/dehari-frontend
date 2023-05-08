import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import Login from './pages/login';
import Register from './pages/Register';
import Homepage from './pages/homepage';
// import { useEffect } from 'react';
// import axios from 'axios';
import ProfileSetup from './pages/ProfileSetup';
import AdList from './pages/AdList';
import Profile from './pages/Profile';
// import Nav from './components/Nav';
import PostAd from './pages/PostAd';
import EditProfile from './pages/EditProfile';
// import Header from './Navbar/Header';
import Nav from './components/Nav';




function App() {
  


  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/users/login' element={  <Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/logout' element={<Landing />} />
        <Route path='/homepage' element={<Homepage /> } />
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