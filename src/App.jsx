import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import Login from "./pages/login";
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import ProfileSetup from './pages/ProfileSetup';
import AdList from './pages/AdList';
import Profile from './pages/Profile';
import PostAd from './pages/PostAd';
import EditProfile from './pages/EditProfile';
import Nav from './components/Nav';
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  
  /** Protected Routes
   * All except Login Register, Landing
   */

  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactUs' element={<Contact />} />
        <Route path='/users/login' element={  <Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/logout' element={<Landing />} />
        <Route path='/homepage' element={<Homepage /> } />
        <Route path='/users/profileSetup' element={<ProfileSetup />} />
        <Route path='/ad/list' element={<AdList />} />
        <Route path='/ad/post' element={<PostAd/>} />
        <Route path='/users/profile/:id' element={<Profile/>} />
        <Route path='/users/editProfile' element={<EditProfile/>} />
 
      </Routes>
    </div>
  );
}

export default App;
