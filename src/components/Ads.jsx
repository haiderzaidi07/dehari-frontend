import { Link } from 'react-router-dom'

const Ads = ({ handleFullAdPopUp, ads }) => {
  // console.log("hi", ads)
  const handleClick = (ad) => {
    // console.log("handle", ad)
    handleFullAdPopUp(true, ad);
  }

  return (
    <>
      {ads.map(ad => (
        <div key={ad.id} onClick={() => handleClick(ad)} id="ad" className="ad bg-white border-[1px] border-slate-300 text-emerald-400 p-6 active:translate-y-2 hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-semibold my-2">{ad.title}</h2>
          <p className="text-slate-600 w-2/3 mb-10">{ad.description}</p>
          <span className="font-semibold my-5">Price estimate: {ad.price}</span>
          <Link to={`/users/profile/${ad.userid}`} className="block font-semibold my-5"> 
            Posted by: {ad.ad_username}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Ads