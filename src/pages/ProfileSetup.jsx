import { useEffect, useState } from "react";
import axios from "axios"


const ProfileSetup = (props) => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullname, setFullname] = useState("")  
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  // const [samples, setSamples] = useState([]);
  const [certifications, setCertifications] = useState([]);







  return <div className="relative bg-white text-center w-[1440px] h-[1024px] overflow-clip">
   
    <div className={`font-medium font-['Raleway'] text-[rgba(32,191,85,1)]`}  >
      <p className="absolute text-5xl m-0 left-[576px] top-[123px] leading-[normal]"  >
        Profile Setup
      </p>
    </div>
    <div  >
      <div className="left-0 absolute w-[1440px] h-[652px] top-[397px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6cc8f85e60fab37007f4b028fb969dc3d143a93d.webp)_center_/_cover]"   />
    </div>
    <div className="font-normal"  >
      <div className="absolute w-[1248px] h-[661px] left-[89px] top-[211px]"  >
        <div className="left-0 top-0 absolute bg-white w-[381px] h-[661px] rounded-[25px] [box-shadow:0px_0px_0px_5px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:5px]"   />
        <div className="top-0 absolute bg-white w-[781px] h-[661px] left-[467px] rounded-[25px] [box-shadow:0px_0px_0px_5px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:5px]"   />
        <div className="absolute left-0 top-0 w-[196px] h-[196px]"  >
          <div className="absolute w-[196px] left-[46.94%] right-[-46.94%] top-[39.29%] bottom-[-39.29%] overflow-clip h-[196px] rounded-[25px]"  >
            {/* <MaskGroup   /> */}
          </div>
          {/* <MdiImageEdit   /> */}
        </div>
        <div className="absolute bg-white w-[289px] h-[131px] left-[46px] top-[348px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   />
        <p className={`absolute text-lg inline m-0 left-[50px] top-[326px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`}  >
          Biography:
        </p>
        <input className="absolute bg-white w-[289px] h-[47px] left-[517px] top-[79px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]" onChange={e => setFirstName(e.target.value)}   />
        <p className={`absolute text-lg inline m-0 left-[517px] top-[57px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`} >
          First Name:
        </p>
        <div className="absolute bg-white w-[289px] h-[47px] left-[517px] top-[185px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   />
        <p className={`absolute text-lg inline m-0 left-[517px] top-[163px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`}  >
          Phone Number:
        </p>
        <div className="absolute bg-white w-[289px] h-[47px] left-[517px] top-[305px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   />
        <p className={`absolute text-lg inline m-0 left-[517px] top-[283px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`}  >
          Your Skills:
        </p>
        <div className={`absolute text-white w-[133px] h-[43px] left-[835px] top-[307px] font-['Raleway']`}  >
          <div className="inset-0 absolute w-[133px] bg-[rgba(32,191,85,1)] rounded-[50px]"   />
          <p className="absolute text-lg inline m-0 top-[25.58%] bottom-[25.58%] left-[19.55%] right-[24.81%] leading-[normal]"  >
            Add Skill
          </p>
        </div>
        <div className={`absolute text-white w-[133px] h-[43px] left-[835px] top-[425px] font-['Raleway']`}  >
          <div className="left-0 top-0 absolute w-[133px] h-[43px] bg-[rgba(32,191,85,1)] rounded-[50px]"   />
          <p className="left-5 absolute text-lg inline m-0 top-[11px] leading-[normal]"  >
            Add Image
          </p>
        </div>
        <div className="absolute bg-white w-[289px] h-[47px] left-[517px] top-[425px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   />
        <div className="absolute bg-white w-[680px] h-[47px] left-[517px] top-[485px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   />
        <p className={`absolute text-lg inline m-0 left-[529px] top-[438px] font-['Raleway'] leading-[normal] text-[rgba(129,129,129,0.75)]`}  >
          Title
        </p>
        <p className={`absolute text-lg inline m-0 left-[529px] top-[498px] font-['Raleway'] leading-[normal] text-[rgba(129,129,129,0.75)]`}  >
          Description
        </p>
        <p className={`absolute text-lg inline m-0 left-[517px] top-[403px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`}  >
          Your Projects:
        </p>
        <div className={`absolute text-white w-[133px] h-[43px] left-[516px] top-[542px] font-['Raleway']`}  >
          <div className="left-0 top-0 absolute w-[133px] h-[43px] bg-[rgba(32,191,85,1)] rounded-[50px]"   />
          <p className="absolute text-lg inline m-0 left-[17px] top-[11px] leading-[normal]"  >
            Add Project
          </p>
        </div>
        <div className="absolute bg-white w-[289px] h-[47px] left-[911px] top-[190px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   />
        <p className={`absolute text-lg inline m-0 left-[911px] top-[168px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`}  >
          Email Address:
        </p>
        <input className="absolute bg-white w-[289px] h-[47px] left-[911px] top-[79px] [box-shadow:0px_0px_0px_1px_rgba(32,_191,_85,_1)_inset] [box-shadow-width:1px]"   onChange={e => e.target.value} />
        <p className={`absolute text-lg inline m-0 left-[911px] top-[57px] font-['Inter'] leading-[normal] text-[rgba(129,129,129,1)]`}>
          Last Name:
        </p>
      </div>
    </div>
    <div className={`text-white font-normal font-['Raleway']`}  >
      <div className="absolute w-[197px] h-[63.69px] left-[749px] top-[904px]"  >
        <div className="left-0 top-0 absolute w-[197px] h-[63.69px] bg-[rgba(32,191,85,1)] rounded-[74.06px]"   />
        <p className="absolute inline m-0 left-[25.18px] top-[16.29px] text-[26.66px] leading-[normal]"  >
          Save Profile
        </p>
      </div>
    </div>
    <div className={`text-white font-normal font-['Raleway']`}  >
      <div className="absolute w-[197px] h-[63.69px] left-[448px] top-[904px]"  >
        <div className="left-0 top-0 absolute w-[197px] h-[63.69px] bg-[rgba(32,191,85,1)] rounded-[74.06px]"   />
        <p className="absolute inline m-0 left-[54.18px] top-[16.29px] text-[26.66px] leading-[normal]"  >
          Cancel
        </p>
      </div>
    </div>
  </div>;
}


ProfileSetup.defaultProps = {
className: "",
style: {}
};

export default ProfileSetup
