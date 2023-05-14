import React, { useState } from 'react'
import ConfirmationPopUp from './ConfirmationPopUp'

const BiddingPopUp = ({ trigger, setTrigger, setPrevTrig, ad }) => {

  const [confirmationPopUpBtn, setConfirmationPopUpBtn] = useState(false)
  const [bid, setBid] = useState(0);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (title.trim() === '' || description.trim() === '' || bid === 0) {
      setErrorMessage('Please fill in all fields.');
    } else {
      setErrorMessage('');
      setConfirmationPopUpBtn(true);
    }
  };

  return trigger ? (
    <>
      <div className="bg-white text-emerald-400 rounded-lg absolute z-20 p-6 top-14 w-1/2 left-1/2 -translate-x-1/2">
        <span onClick={() => { setTrigger(false) }} className="hover:scale-110 active:scale-90 cursor-pointer text-emerald-400 font-extrabold text-2xl absolute top-6 right-10">x</span>

        <form action="">

          <h2 className="font-bold text-xl">Bid Title:</h2>
          <input className="p-2 my-4 w-full bg-slate-100 text-slate-600 text-md" onChange={(e) => setTitle(e.target.value)}></input>
          <h2 className="font-bold text-xl">Bid description:</h2>
          <textarea className="p-2 my-4 w-full bg-slate-100 text-slate-600 text-md" name="" id="" cols="30" rows="6" onChange={(e) => setDescription(e.target.value)}></textarea>
          <span>Your bid</span>
          <input type="number" className="font-semibold border-2 border-emerald-400 block py-2 px-4 my-2 text-sm rounded-sm" placeholder="Input your price" onChange={(e) => setBid(e.target.value)}></input>
          {errorMessage && <p className="text-red-600 absolute bottom-4 left-4">{errorMessage}</p>}
          <input onClick={handleSubmit} type="button" value="Bid" className="hover:-translate-y-1 transition-transform active:translate-y-1 block mx-auto bg-emerald-400 text-white py-2 px-4 rounded-full w-32 mt-10"></input>
        </form>
      </div>
      <ConfirmationPopUp trigger={confirmationPopUpBtn} ad={ad} bid={bid} description={description} title={title} setTrigger={setConfirmationPopUpBtn} setPrevTrig={false} message={'Bid posted Successfully!'} />
    </>
  ) : null;
}

export default BiddingPopUp
