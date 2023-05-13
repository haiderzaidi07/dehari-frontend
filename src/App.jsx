import { Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing";
import Login from "./pages/login";
import Register from './pages/Register';
import Homepage from './pages/homepage';
import ProfileSetup from './pages/ProfileSetup';
import AdList from './pages/AdList';
import Profile from './pages/Profile';
import PostAd from './pages/PostAd';
import EditProfile from './pages/EditProfile';
import Nav from './components/Nav';
import About from './pages/About'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import ProtectedRoutes from './auth/ProtectedRoutes'

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
        <Route path='/homepage' element={<ProtectedRoutes><Homepage /></ProtectedRoutes>} />
        <Route path='/users/profileSetup' element={<ProtectedRoutes><ProfileSetup /></ProtectedRoutes>} />
        <Route path='/ad/list' element={<ProtectedRoutes><AdList /></ProtectedRoutes>} />
        <Route path='/ad/post' element={<ProtectedRoutes><PostAd /></ProtectedRoutes>} />
        <Route path='/users/profile/:id' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        <Route path='/users/editProfile' element={<ProtectedRoutes><EditProfile /></ProtectedRoutes>} />
        <Route path='*' element={<NotFound />} />
 
      </Routes>
    </div>
  );
}

export default App;
