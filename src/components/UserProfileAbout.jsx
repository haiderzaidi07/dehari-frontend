import React from "react";

const UserProfileAbout = () => {
    
  return (
    <div>
      <h1 class="text-green-600 font-bold text-xl">About</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione rerum
        debitis distinctio expedita voluptates odit, aperiam et voluptatum
        perferendis, soluta aut molestias sequi mollitia? Nulla deleniti,
        repellat quo itaque in tempora corporis hic nesciunt voluptatem dolores
        ab dolore. Dolorem, qui neque vel a quaerat architecto ad numquam
        facilis voluptatum repellat!
      </p>
      <h1 class="text-green-600 font-bold text-xl">Skills</h1>
      <ul>
        <li>PhotoShop</li>
        <li>Illustrator</li>
        <li>SQL</li>
        <li>Database</li>
      </ul>
      <h1 class="text-green-600 font-bold text-xl">Certifications</h1>
      <ul>
        <li>
          PhotoShop - Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem, dolore.
        </li>
        <li>
          Illustrator - Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. In, sequi!
        </li>
        <li>
          SQL - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Explicabo, optio!
        </li>
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
