import React,{useState, useEffect} from 'react'
import ConfirmationPopUp from '../components/ConfirmationPopUp';
import axios from "axios"
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const EditProfile = () => {
  const [confirmationPopUp,setConfirmationPopUp]=useState(false);
  const [fullname, setFullName] = useState('')
  const [skills, setSkills] = useState([])
  const [certification, setCertification] = useState([])
  const [prevTrigger, setPrevTrigger] = useState("")

  useEffect( () => {
    const userid = cookies.get('token').id
    axios.get(`http://localhost:5000/users/profile/${userid}`).then((res) => {
      setFullName(res.data.userProfile.fullname)
      setSkills(res.data.userProfile.skills)
      setCertification(res.data.userProfile.certification)
      setPrevTrigger("editprofile")
    })
  }, [])

  
  return (
    <>
      <img class="absolute top-0 h-80 -z-10 scale-x-150 w-full " src="img/gradient.svg" alt="gradient"></img>
    <div class="mt-52 mb-20 bg-white rounded-xl shadow-lg p-10 w-2/3 mx-auto">

        <img class="mx-auto w-32 h-32 -mt-24" src="img/profilePicPlaceholder.jpeg" alt="profilePicPlaceholder"></img>
        <span class="m-2 font-bold text-2xl text-green-600 text-center block">{fullname}</span>
        <h1 class="text-green-600 font-bold text-xl mt-10">Edit:</h1>
        <hr class="bg-green-600 w-full h-[3px] my-2"></hr>
        {/* <!-- about profile  --> */}
        <section class="mt-10 ">
            <form action="/profile.html">

                <label class="text-green-600 font-bold text-xl">Full Name</label>
                <textarea class="block border-2 w-full h-52 p-2 border-green-600" value={fullname} onChange={e => setFullName(e.target.value)}/> 
                <label class="text-green-600 font-bold text-xl">Skills</label>
                <textarea class="block border-2 w-full h-52 p-2 border-green-600" value={skills} onChange={e => setSkills(e.target.value)} /> 
                <label class="text-green-600 font-bold text-xl">Certifications</label>
                <textarea class="block border-2 w-full h-52 p-2 border-green-600" value={certification} onChange = {e => setCertification(e.target.value)}/> 
                
                <div class="flex justify-center">
                 <input onClick={()=>{setConfirmationPopUp(true)}} value="Confirm" type='button' class="hover:-translate-y-1 active:translate-y-1 transition-transform text-center w-1/4 rounded-full bg-green-600 text-white py-2 px-4 mx-4 block mt-20"/>
                
                  <a href="/users/profile" class="hover:-translate-y-1 active:translate-y-1 transition-transform text-center w-1/4 rounded-full bg-green-600 text-white py-2 px-4 mx-4 block mt-20">Cancel</a>
                </div>              </form>
        </section>
    </div>
    
      <ConfirmationPopUp trigger={confirmationPopUp} setTrigger={setConfirmationPopUp} fullname={fullname} skills={skills} certification={certification} prevTrigger={true}></ConfirmationPopUp>    </>
  );
};

export default EditProfile
