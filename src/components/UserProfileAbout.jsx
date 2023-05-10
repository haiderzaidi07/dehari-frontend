import React from "react";
const UserProfileAbout = ({ userProfile }) => {
    
  return (
    <div>
      <h1 class="text-green-600 font-bold text-xl">About</h1>
      <p>
        About
        {/* {userProfile.about} */}
      </p>
      <h1 class="text-green-600 font-bold text-xl">Skills</h1>
      <ul>
      {userProfile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h1 class="text-green-600 font-bold text-xl">Certifications</h1>
      <ul>
      {userProfile.certification.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>

      <a
        href="/users/editProfile"
        class="hover:-translate-y-1 active:translate-y-1 transition-transform rounded-full bg-green-600 text-white py-2 px-4 w-32 text-center mx-auto block mt-20"
      >
        Edit Profile
      </a>
    </div>
  );
};

export default UserProfileAbout;
