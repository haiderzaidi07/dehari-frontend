import React,{useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const ProfileSetup = () => {
  const [fullname, setFullName] = useState("");

  const [skills, setSkills] = useState("");

  const [certification, setCertification] = useState("");
  const {id} = cookies.get('token')
  const postProfileSetup = async (e) => {
    e.preventDefault();
     let skill = `{${skills}}`
    let certifications = `{${certification}}`

    if (fullname === "") {
      var fullnametest = `guest${id}`;
      setFullName(fullnametest);
    } else {
      fullnametest = fullname;
    }




try{
    await axios.post(
    "http://localhost:4500/profileSetup/profile",
    {
      fullname : fullnametest,
      skills : skill, 
      certification : certifications,
      id
    }, {
      withCredentials: true,
    }
  ).catch((err) => {
    console.log(err)
  });
  window.location.href = "/homepage"
}catch(e){
  console.log(e);
}
  };
  // useEffect

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold my-4 p-4 text-emerald-500 shadow-md rounded-lg">User Profile Setup</h1>

      {/* Personal Details Section */}
      <div className='my-5 mb-10 bg-white shadow-lg opacity-60 hover:opacity-100 transition-all hover:translate-y-1 duration-500 rounded-lg p-6'>
      <h2 className="text-xl font-bold mb-2">Personal Details</h2>
      <form
      //  onSubmit={handleSubmit} 
      >
        <label htmlFor="fullname" className="block mb-2">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />
      </form>
      </div>
      <div className='my-5 mb-10 bg-white shadow-lg opacity-60 hover:opacity-100 transition-all hover:translate-y-1 duration-500 rounded-lg p-6'>
      {/* Work Experience Section */}
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
      <form
       >
        <label htmlFor="skills" className="block mb-2">Skills:</label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />
      </form>
</div>
      {/* Projects Section */}
      <div className='my-5 mb-10 bg-white shadow-lg opacity-60 hover:opacity-100 transition-all hover:translate-y-1 duration-500 rounded-lg p-6'>

      <h2 className="text-xl font-bold mb-2">Projects</h2>
      <form 
      // onSubmit={handleSubmit}
      >
        <label htmlFor="certification" className="block mb-2">Certifications:</label>
        <input
          type="text"
          id="certification"
          name="certification"
          value={certification}
          onChange={(e) => setCertification(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />

      </form>
</div>
      {/* Submit Button */}
      <button
        type="submit"
        onClick={postProfileSetup}
        className="px-6 py-2 bg-emerald-500 text-white rounded-md transition-all hover:text-emerald-500 hover:bg-white border-2 border-emerald-500 active:translate-y-1"
      >
        Save Profile
      </button>
      <button
        type="submit"
        onClick={postProfileSetup}
        className="px-5 ml-5 py-2 bg-red-600 text-white rounded-md transition-all hover:text-red-600 hover:bg-white border-2 border-red-600 active:translate-y-1"
      >
        Skip For Now
      </button>
    </div>
  );
}

export default ProfileSetup

