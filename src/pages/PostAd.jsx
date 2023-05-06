import {useState} from "react";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
const PostAd = () => {
    // const {useEffect, useState } = React;
    const [postAdBtn, setPostAdBtn] = useState(false)
  return (

    <div className="w-full bg-emerald-400 pt-24 pb-32">
      <div className="mx-auto w-4/6 rounded-xl shadow-lg bg-white p-10 ">
        <form action="" className="flex flex-col justify-center h-[600px]">
          <label className="my-2 text-emerald-600 font-bold text-xl" htmlFor="">
            Ad title
          </label>
          <input
            className="my-2 p-2 border-2 border-emerald-500 "
            type="text"
          />
          <label className="my-2 text-emerald-600 font-bold text-xl" htmlFor="">
            Description
          </label>
          <textarea
            className="my-2 p-2 border-2 border-emerald-500 h-80"
            type="text-Area"
          ></textarea>
          <label className="my-2 text-emerald-600 font-bold text-xl" htmlFor="">
            Attach images
          </label>
          <input
            type="file"
            className="file:bg-emerald-400 file:rounded-md file:px-2 file:border-none file:shadow-md file:text-white"
          />
          <div className="flex w-1/5 items-center my-10">
            <label
              className="my-2 text-emerald-600 font-bold text-xl"
              htmlFor=""
            >
              Price:
            </label>
            <input
              className="my-2 mx-4 px-2 border-2 border-emerald-500 inline-block w-20"
              type="text"
            />
          </div>
          <button onClick={()=>{setPostAdBtn(true)}} className="mx-auto block bg-emerald-400 rounded-full py-2 px-8 font-bold text-white mt-10 hover:-translate-y-1 transition-transform active:translate-y-1">
            Post Ad
          </button>
        </form>
      </div>
      <ConfirmationPopUp trigger={postAdBtn} setTrigger={setPostAdBtn} />
    </div>
  );
};

export default PostAd;
