import React,{useState} from "react";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()


const PostAd = () => {
    const [postAdBtn, setPostAdBtn] = useState(false)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const userid = cookies.get("token").id
    console.log(userid)

    const postAd = async (e) =>{
      e.preventDefault()
      await axios.post('http://localhost:4500/ad/post', {
        title, description, price, userid
      }, {
        withCredentials: true
      })
      .then (() => {
        window.location.href = '/homepage';
      })
    }
  

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
            onChange={e => setTitle(e.target.value)} required
          />
          <label className="my-2 text-emerald-600 font-bold text-xl" htmlFor="">
            Description
          </label>
          <textarea
            className="my-2 p-2 border-2 border-emerald-500 h-80"
            type="text-Area"
            onChange={e => setDescription(e.target.value)} required
          ></textarea>
          <label className="my-2 text-emerald-600 font-bold text-xl" htmlFor="">
            Attach images
          </label>
          <input
            type="file"
            className="file:bg-emerald-400 file:rounded-md file:px-3 file:pb-2 file:my-10 file:border-none file:shadow-md file:text-white"
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
            onChange={e => setPrice(e.target.value)} required
            />
            <span className="text-emerald-500 font-bold">Rupees</span>
          </div>
        </form>
          {/* <button onClick={() => {
    setPostAdBtn(true);
    postAd();
}} className="mx-auto block bg-emerald-400 rounded-full py-2 px-8 font-bold text-white mt-10 hover:-translate-y-1 transition-transform active:translate-y-1">
            Post Ad
          </button> */}
          {/* fix this part */}
          
          <button onClick={postAd} className="mx-auto block bg-emerald-400 rounded-full py-2 px-8 font-bold text-white mt-10 hover:-translate-y-1 transition-transform active:translate-y-1">
            Post Ad
          </button>
      </div>
      <ConfirmationPopUp trigger={postAdBtn} setTrigger={setPostAdBtn} setPrevTrig={()=>{}}/>
    </div>
  );
};

export default PostAd;
