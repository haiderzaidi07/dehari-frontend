import { useState, useEffect } from 'react';

const Ads = ({ handleFullAdPopUp, ads }) => {

  

  const handleClick = (ad) => {
    handleFullAdPopUp(true, ad);
  }

  return (
    <>
      {ads.map(ad => (
        <div key={ad.id} onClick={() => handleClick(ad)} id="ad" className="ad bg-white border-[1px] border-slate-300 text-emerald-400 p-6 active:translate-y-2 hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-semibold my-2">{ad.title}</h2>
          <p className="text-slate-600 w-2/3 mb-10">{ad.description}</p>
          <span className="font-semibold my-10">Price estimate: {ad.price}</span>
        </div>
      ))}
    </>
  );
}

export default Ads